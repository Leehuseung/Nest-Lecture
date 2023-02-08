import {Module} from '@nestjs/common';
import {BoardsService} from "../boards/boards.service";
import {TestController} from "./test.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Board} from "../boards/board.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Board])],
    controllers: [TestController],
    providers: [BoardsService],
})
export class TestModule {
}
