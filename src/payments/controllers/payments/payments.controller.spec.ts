import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsController } from './payments.controller';
import {Request, Response} from 'express';
import {PaymentsService} from "../../services/payments/payments.service";
import {BadRequestException} from "@nestjs/common";

describe('PaymentsController', () => {
  let controller: PaymentsController;
  let paymentsService: PaymentsService;

  const requestMock = {
    query : {}
  } as unknown as Request;

  const statusResponseMock = {
    send: jest.fn(x => x),

  }

  const responseMock = {
    status: jest.fn((x) => statusResponseMock),
    send: jest.fn((x) => x),
  } as unknown as Response;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsController],
      providers: [
        {
          provide: 'PAYMENTS_SERVICE',
          useValue: {
            createPayment: jest.fn((x) => x)
          }
        }
      ]
    }).compile();

    controller = module.get<PaymentsController>(PaymentsController);
    paymentsService = module.get<PaymentsService>('PAYMENTS_SERVICE');

  });

  it('paymentsService should be defined ', () => {
    expect(paymentsService).toBeDefined();
  })

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });



  describe('getPayments', () => {
    it('should return a status of 40-.',() => {
      controller.getPayments(requestMock, responseMock);
      expect(responseMock.status).toHaveBeenCalledWith(400);
      expect(statusResponseMock.send).toHaveBeenCalledWith({
        msg: 'missing count or page query parameter'
      })
    });
    it('should return a status of 200 when query pamrams are present', () => {
      requestMock.query = {
        count: '10',
        page: '1',
      }
      controller.getPayments(requestMock,responseMock);
      expect(responseMock.send).toHaveBeenCalledWith(200);
    });
  })


  describe('createPayment', () => {
    it('should return a successful response', async () => {
      const response = await controller.createPayment({
        email: 'ansion@gmail.com',
        price: 100,
      });
    });

    it('should throw an error', async () => {
      jest.spyOn(paymentsService, 'createPayment').mockImplementationOnce(() => {
        throw new BadRequestException();
      });
      try{
        const response = await controller.createPayment({
          email: 'anson@gmail.com',
          price: 100,
        });
      } catch (err) {
        console.log(err);
      }
    });
  });
});
