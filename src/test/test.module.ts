import {Global, Module} from '@nestjs/common';
import {BoardsService} from "../boards/boards.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Board} from "../boards/board.entity";
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
    imports: [],
    controllers: [TestController],
    providers: [TestService],
    exports: [TestService]
})
export class TestModule {
}
