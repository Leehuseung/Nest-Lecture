import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request, Response } from 'express';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {LiveLogsEntity} from "../log/live-logs.entity";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost,
                @InjectRepository(LiveLogsEntity)
                private liveLogsRepository: Repository<LiveLogsEntity>
                ) {}

    catch(exception: unknown, host: ArgumentsHost): void {
        const { httpAdapter } = this.httpAdapterHost;
        console.log('1');
        console.log('1');
        console.log('1');
        console.log('1');
        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();
        const req = ctx.getRequest<Request>();

        const httpStatus =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        const responseBody = {
            statusCode: httpStatus,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        const method = req.method;
        const statusCode = responseBody.statusCode;
        const remoteIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const url = req.originalUrl
        const userAgent = req.headers['user-agent'];
        const requestData = req.body;

        const err = exception as Error;
        const stack = err.stack;
        const liveLog = new LiveLogsEntity(
            method,
            statusCode,
            JSON.stringify(remoteIp),
            url,
            userAgent,
            stack,
            requestData,
            responseBody
        );

        this.liveLogsRepository.save(liveLog)
            .then(res => res);

        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
}