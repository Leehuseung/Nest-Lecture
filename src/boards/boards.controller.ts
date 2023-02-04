import {Body, Controller, Get, Param, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {BoardsService} from "./boards.service";
import {Board} from "./board.entity";
import {CreateBoardDto} from "./dto/create-board.dto";

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {}

    @Get('/test')
    test() {
        return this.boardService.test();
    }

    // @Get()
    // getAllBoard(): Board[]{
    //     return this.boardService.getAllBoards();
    // }

    @Post()
    @UsePipes(ValidationPipe) //핸들러 레벨에서 유효성 체크를 위한 validation check
    createBoard(@Body() createBoardDto: CreateBoardDto) {
        return this.boardService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: number): Promise<Board> {
        return this.boardService.getBoardById(id);
    }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void {
    //     this.boardService.deleteBoard(id);
    // }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus, // status 값만 유효성 체크. 파라미터 레벨에서 파이프를 넣는다
    // ) {
    //     return this.boardService.updateBoardStatus(id, status);
    // }


}
