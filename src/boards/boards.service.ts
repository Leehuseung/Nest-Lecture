import {Injectable, ParseUUIDPipe} from '@nestjs/common';
import {Board, BoardStatus} from "./board.model";
import {v1 as uuid} from 'uuid';
import {CreateBoardDto} from "./dto/create-board.dto";

//nest g service boards --no-spec
@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto){
        const {title, description} = createBoardDto;
        const board: Board = {
            id: uuid(),
            title, // title:title -> title로 표현 가능
            description,
            status: BoardStatus.PUBLIC
        }
        this.boards.push(board);
        return board;
    }
}
