import {Injectable, ParseUUIDPipe} from '@nestjs/common';
import {Board, BoardStatus} from "./board.model";
import {v1 as uuid} from 'uuid';

//nest g service boards --no-spec
@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(title:string, description: string){
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
