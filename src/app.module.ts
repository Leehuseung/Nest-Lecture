import {Module} from '@nestjs/common';
import {BoardsModule} from './boards/boards.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeORMConfig} from "./configs/typeorm.config";
import {TestModule} from './test/test.module';
import {PaymentsModule} from './payments/payments.module';
import { CatModule } from './cat/cat.module';
import {APP_FILTER} from "@nestjs/core";
import {AllExceptionsFilter} from "./filter/all-exceptions-filter";
import {Board} from "./boards/board.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot(typeORMConfig),
        TypeOrmModule.forFeature([Board]),
        BoardsModule,
        TestModule,
        PaymentsModule,
        CatModule
    ],
    controllers: [],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter
        },
    ],
})
export class AppModule {
}
