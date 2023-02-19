import {Injectable, NestMiddleware} from '@nestjs/common';
import {NextFunction, Request, Response} from 'express';
import {LiveLogsEntity} from "../log/live-logs.entity";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(
        // @InjectRepository(LiveLogsEntity)
        // private liveLogsEntityRepository: Repository<LiveLogsEntity>
                        ) {}
    use(req: Request, res: Response, next: NextFunction) {

        console.log('미들웨어 입니다.');

        const method = req.method;
        const statusCode = res.statusCode;
        const remoteIp = req.ip;
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
            {}
        );

        // const responseData = res.body;

        // res.on('finish', () => {
        //     this.logger.log(`
        // ---------- requestInfo ----------
        // req.originalUrl - ${req.originalUrl}
        // req.method - ${req.method}
        // req.query - ${JSON.stringify(req.query)}
        // req.body - ${JSON.stringify(req.body)}
        // ---------- responseInfo ----------
        // res.statusMessage - ${JSON.stringify(res.statusMessage)}
        // res.statusCode - ${JSON.stringify(res.statusCode)}
      // `);
      //   });


        next();
    }
}
