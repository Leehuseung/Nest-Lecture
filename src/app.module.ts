import {Module} from '@nestjs/common';
import {BoardsModule} from './boards/boards.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeORMConfig} from "./configs/typeorm.config";
import {TestModule} from './test/test.module';
import {PaymentsModule} from './payments/payments.module';
import { CatModule } from './cat/cat.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeORMConfig),
        BoardsModule,
        TestModule,
        PaymentsModule,
        CatModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
