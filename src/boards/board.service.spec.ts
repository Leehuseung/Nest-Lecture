import { Test, TestingModule } from '@nestjs/testing';
import {BoardsService} from "./boards.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Board} from "./board.entity";

describe('BoardService', () => {
    let service: BoardsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [TypeOrmModule.forFeature([Board])],
            providers: [BoardsService],
        }).compile();

        service = module.get<BoardsService>(BoardsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should be defined', () => {
        service.getBoardById(123);
    });
});
