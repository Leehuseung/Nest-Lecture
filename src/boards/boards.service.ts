import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Board} from "./board.entity";

//nest g service boards --no-spec
@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Board)
        private boardRepository: Repository<Board>,
    ) {}

    async getBoardById(id: number): Promise<Board> {
        const found = await this.boardRepository.findOneBy({ id });
        if(!found){
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }
        return found;
    }

    //
    // getAllBoards(): Board[] {
    //     return this.boards;
    // }
    //
    // createBoard(createBoardDto: CreateBoardDto){
    //     const {title, description} = createBoardDto;
    //     const board: Board = {
    //         id: uuid(),
    //         title, // title:title -> title로 표현 가능
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }
    //     this.boards.push(board);
    //     return board;
    // }
    //
    // getBoardById(id: string): Board{
    //     const found = this.boards.find((board) => board.id === id);
    //
    //     if(!found) {
    //         throw new NotFoundException(`Can't find Board with id ${id}`);
    //     }
    //
    //     return found;
    // }
    //
    // deleteBoard(id: string): void {
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board) => board.id !== id);
    // }
    //
    // updateBoardStatus(id:string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }

}
