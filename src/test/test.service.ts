import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Board} from "../boards/board.entity";
import {Repository} from "typeorm";

@Injectable()
export class TestService {
    constructor(
        @InjectRepository(Board)
        private boardRepository: Repository<Board>,
    ) {}

    a() {
        console.log('a Service');
    }
}
