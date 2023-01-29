import { Injectable } from '@nestjs/common';
import {Board} from "./board.model";

//nest g service boards --no-spec
@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }
}
