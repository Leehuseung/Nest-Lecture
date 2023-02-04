import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Between, MoreThan, Repository} from "typeorm";
import {Board} from "./board.entity";
import {CreateBoardDto} from "./dto/create-board.dto";
import {v1 as uuid} from 'uuid';
import {BoardStatus} from "./board-status.enum";
import * as moment from 'moment';

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
    async createBoard(createBoardDto: CreateBoardDto) :Promise<Board>{
        const {title, description} = createBoardDto;
        const board = this.boardRepository.create({
            title, // title:title -> title로 표현 가능
            description,
            status: BoardStatus.PUBLIC
        });
        await this.boardRepository.save(board);
        return board;
    }
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

    async test() {

        let sDate = moment();
        sDate = sDate.subtract(3,'days');
        sDate.hours(9);
        sDate.minutes(0);
        sDate.seconds(0);
        let eDate = moment();
        eDate.hour(24);
        eDate.minute(0);
        eDate.second(0);

        console.log(eDate.toDate());

        const board = await this.boardRepository.findOne({
            where: {
                createDate: Between(sDate.toDate(), eDate.toDate()),
            }
        });

        console.log(board);

        // console.log(board.createDate.getFullYear());
        // console.log(board.createDate.getMonth()+1);
        // console.log(board.createDate.getDay());
        // console.log(board.createDate.getHours());
        // console.log(board.createDate.getMinutes());
        // console.log('---');
        // console.log(board.createDate.getUTCHours());

        // console.log('toISOString()',board.createDate.toISOString());
        // console.log('toDateString()',board.createDate.toDateString());
        // console.log('toUTCString()',board.createDate.toUTCString());
        console.log('toString()',board.createDate.toString());
        board.createDate.getHours();
        board.createDate.getUTCHours();
        // console.log('toTimeString()',board.createDate.toTimeString());

        // 2023-02-03T14:55:00.548Z
        // 2023-02-04T15:00:00.548Z

        // let sDate2 = moment();
        // sDate2 = sDate2.subtract(3,'days');
        // sDate2.hours(9);
        // sDate2.minutes(0);
        // sDate2.seconds(0);
        // let eDate2 = moment();
        // eDate2.hour(24);
        // eDate2.minute(0);
        // eDate2.second(0);
        //
        // console.log(eDate2.toDate());
        //
        // const boards = await this.boardRepository.find({
        //     where: {
        //         createDate: Between(sDate2.toDate(), eDate2.toDate()),
        //     }
        // });
        //
        // console.log(boards);

    }
}
