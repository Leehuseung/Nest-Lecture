import {Test, TestingModule} from '@nestjs/testing';
import {CatService} from './cat.service';
import {getRepositoryToken} from "@nestjs/typeorm";
import {Board} from "../boards/board.entity";
import {Repository} from "typeorm";
import {BoardStatus} from "../boards/board-status.enum";

describe('CatService', () => {
  let service: CatService;
  let boardRepository: Repository<Board>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatService,{
        provide: getRepositoryToken(Board),
        useValue: {
          find: jest.fn(),
        }
      }],
    }).compile();

    service = module.get<CatService>(CatService);
    boardRepository = module.get<Repository<Board>>(
        getRepositoryToken(Board),
    ); // Board 엔티티 리포지토리를 가져옵니다.
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('BoardRepository Mock 테스트', async () => {
    // jest.spyOn(catsService, 'findAll').mockImplementation(() =
    const board1 = new Board();
    board1.title = 'Board 1';
    board1.description = 'Board 1 description';
    board1.status = BoardStatus.PUBLIC;
    board1.writer = 'John Doe';
    board1.createDate = new Date();

    jest.spyOn(boardRepository, 'find').mockResolvedValue([board1]);

    // boardRepository.find.mockResolvedValue([board1]);
    const data = await service.test();
    console.log(data)

    // expect(service.test()).toEqual('123');
  });
});
