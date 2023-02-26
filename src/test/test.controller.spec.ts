import { Test, TestingModule } from '@nestjs/testing';
import { TestController } from './test.controller';
import {TestService} from "./test.service";

/**
 * 강의 mocking
 */
describe('TestController', () => {
  let controller: TestController;

  let mockTestService = {
    a: jest.fn(() => {
      console.log(123);
    }),
    b : jest.fn(),

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestController],
      providers: [TestService]
    }).overrideProvider(TestService).useValue(mockTestService).compile();

    controller = module.get<TestController>(TestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('test', () => {
    controller.a();
  });

  test('2 더하기 2는 4가 아닙니다.', () => {
    expect(2 + 2).not.toBe(5);
  });
});
