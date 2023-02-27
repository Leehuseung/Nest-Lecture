import { Test, TestingModule } from '@nestjs/testing';
import { TestService } from './test.service';
import {TestController} from "./test.controller";

describe('TestService', () => {
  let service: TestService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     controllers: [TestController],
  //     providers: [TestService],
  //   }).compile();
  //
  //   service = module.get<TestService>(TestService);
  // });
  //
  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });



});

const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});

describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    console.log(`1 a : ${a} , b : ${b}`);
    expect(a + b).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    console.log(`2 a : ${a} , b : ${b}`);
    expect(a + b).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    console.log(`3 a : ${a} , b : ${b}`);
    expect(a + b).not.toBeLessThan(expected);
  });
});
