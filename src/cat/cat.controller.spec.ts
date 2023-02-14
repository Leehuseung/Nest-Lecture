import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat.controller';
import {CatService} from "./cat.service";
import {Board} from "../boards/board.entity";
import {Repository} from "typeorm";
import {TestService} from "../test/test.service";

describe('CatsController', () => {
  let catsController: CatController;
  let catsService: CatService;
  let boardRepository: Repository<Board>

  beforeEach(() => {
    catsService = new CatService(boardRepository);
    catsController = new CatController(catsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = [1,2,3];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => [1,2,3]);

      expect(catsController.findAll()).toEqual(result);
    });
  });
});