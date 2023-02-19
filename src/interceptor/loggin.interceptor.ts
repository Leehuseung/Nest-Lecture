import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        //메서드 실행 전에 실행됨.
        //메서드 혹은 컨트롤러, 혹은 전역으로 사용 가능하다.
        console.log('Before...');
        console.log('Before...');
        console.log('Before...');
        console.log('Before...');

        const now = Date.now();
        return next
            .handle()
            .pipe(
                map(value => value === null ? '' : { value } ),
            );
    }
}