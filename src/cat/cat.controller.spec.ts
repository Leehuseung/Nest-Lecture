import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat.controller';
import {CatService} from "./cat.service";
import {Board} from "../boards/board.entity";
import {Repository} from "typeorm";
import {TestService} from "../test/test.service";
import {getRepositoryToken, TypeOrmModule} from "@nestjs/typeorm";

describe('CatsController', () => {
  let catsController: CatController;
  let catsService: CatService;
  let boardRepository: Repository<Board>

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatController],
      providers: [CatService, {
        provide: getRepositoryToken(Board),
        useValue: {
          find: jest.fn()
        }
      }],
    }).compile();

    boardRepository = moduleRef.get<Repository<Board>>(
        getRepositoryToken(Board),
    ); // Board 엔티티 리포지토리를 가져옵니다.

    catsService = moduleRef.get<CatService>(CatService);
    catsController = moduleRef.get<CatController>(CatController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = [1,2,3];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => [1,2,3]);

      /**
       * controller의 Service에서 boardRepositry mock을 구현안한 함수 가 있다면 어떤 오류가 발생?
       *
       * Cannot read properties of undefined (reading 'find')
       * TypeError: Cannot read properties of undefined (reading 'find')
       *
       * 아래와같이 mock 결과를 만들어준다면? -> 위의 getRepositoryToken을 써야한다..
       */


      expect(catsController.findAll()).toEqual(result);
    });
  });
});