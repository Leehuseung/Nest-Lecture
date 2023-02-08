import {Controller, Get} from '@nestjs/common';
import {BoardsService} from "../boards/boards.service";

@Controller('test')
export class TestController {
    constructor(private boardService: BoardsService) {}


    @Get('test')
    asef() {
        console.log(this.boardService.mm);
    }

}
