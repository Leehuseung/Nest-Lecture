import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {BoardsService} from "./boards.service";
import {Board, BoardStatus} from "./board.model";
import {CreateBoardDto} from "./dto/create-board.dto";

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {}

    @Get()
    getAllBoard(): Board[]{
        return this.boardService.getAllBoards();
    }

    @Post()
    createBoard(@Body() createBoatdDto: CreateBoardDto) {
        return this.boardService.createBoard(createBoatdDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus,
    ) {
        return this.boardService.updateBoardStatus(id, status);
    }




}
