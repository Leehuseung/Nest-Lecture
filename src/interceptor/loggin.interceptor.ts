import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LiveLogsEntity} from "../log/live-logs.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor(
        @InjectRepository(LiveLogsEntity)
        private liveLogsRepository: Repository<LiveLogsEntity>
    ) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const res = context.switchToHttp().getResponse();
        //메서드 실행 전에 실행됨.
        //메서드 혹은 컨트롤러, 혹은 전역으로 사용 가능하다.
        console.log('Before...');

        const now = Date.now();
        return next
            .handle()
            .pipe(
                map(body => {
                    console.log(2222);
                    const method = req.method;
                    const statusCode = res.statusCode;
                    const remoteIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
                    const url = req.originalUrl
                    const userAgent = req.headers['user-agent'];
                    const requestData = req.body;

                    const liveLog = new LiveLogsEntity(
                        method,
                        statusCode,
                        remoteIp,
                        url,
                        userAgent,
                        '',
                        requestData,
                        body
                    );

                    this.liveLogsRepository.save(liveLog)
                        .then(res => res);

                    return body;
                }),
            );
    }
}