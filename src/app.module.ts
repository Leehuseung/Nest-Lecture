import {Module} from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeORMConfig} from "./configs/typeorm.config";
import { TestController } from './test/test.controller';
import { TestModule } from './test/test.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeORMConfig),
        BoardsModule,
        TestModule,
        PaymentsModule
    ],
    controllers: [TestController],
    providers: [],
})
export class AppModule {
}
