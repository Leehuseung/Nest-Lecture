import {Module} from '@nestjs/common';
import {BoardsModule} from './boards/boards.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeORMConfig} from "./configs/typeorm.config";
import {TestModule} from './test/test.module';
import {PaymentsModule} from './payments/payments.module';
import {CatModule} from './cat/cat.module';
import {APP_FILTER, APP_INTERCEPTOR} from "@nestjs/core";
import {AllExceptionsFilter} from "./filter/all-exceptions-filter";
import {Board} from "./boards/board.entity";
import {LiveLogsEntity} from "./log/live-logs.entity";
import {LoggingInterceptor} from "./interceptor/loggin.interceptor";
import { StripeModule } from './stripe/stripe.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeORMConfig),
        TypeOrmModule.forFeature([Board, LiveLogsEntity]),
        BoardsModule,
        TestModule,
        PaymentsModule,
        CatModule,
        StripeModule.forRoot('api-key',{apiVersion: '2022-11-15'})
    ],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor,
        },
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter
        }
    ],
})
export class AppModule {
    // configure(consumer: MiddlewareConsumer) {
    //     consumer.apply(LoggerMiddleware).forRoutes('*');
    // }
}
