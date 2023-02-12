import {Module} from '@nestjs/common';
import {TestService} from './test.service';
import {TestController} from './test.controller';
import {APP_FILTER} from "@nestjs/core";
import {HttpExceptionFilter} from "./exception/HttpExceptionFilter";

@Module({
    imports: [],
    controllers: [TestController],
    providers: [TestService,
        // {
        //     provide: APP_FILTER,
        //     useClass: HttpExceptionFilter,   //모듈단위의 예외 필터처리도 가능하다.
        // },
    ],
    exports: [TestService]
})
export class TestModule {
}
