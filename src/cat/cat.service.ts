import {Injectable, OnModuleInit} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Board} from "../boards/board.entity";
import {Repository} from "typeorm";

@Injectable()
export class CatService implements OnModuleInit{

    constructor(
        @InjectRepository(Board)
        private boardRepository: Repository<Board>,
    ) {}

    findAll() {
        const a = this.boardRepository.find();

        return [1,2,3,4,5,6,7,8,9,10];
    }

    async test() {
        return this.boardRepository.find();
    }

    onModuleInit() {
        console.log('init Cat Service')
        console.log('init Cat Service')
        console.log('init Cat Service')
        console.log('init Cat Service')
        console.log('init Cat Service')
    }
}
