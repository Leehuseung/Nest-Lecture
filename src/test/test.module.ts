import {Module} from '@nestjs/common';
import {BoardsService} from "../boards/boards.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Board} from "../boards/board.entity";
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Board])],
    controllers: [TestController],
    providers: [BoardsService, TestService],
})
export class TestModule {
}
