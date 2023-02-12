import {Controller, Get, HttpException, HttpStatus, InternalServerErrorException, UseFilters} from '@nestjs/common';
import {TestService} from "./test.service";
import {HttpExceptionFilter} from "./exception/HttpExceptionFilter";
import {AllExceptionsFilter} from "./exception/AllExceptionFilter";

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {
    }

    @Get('')
    a() {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        this.testService.a();
    }

    @Get('except')
    except() {
        //첫번째 파라미터에 메세지를 넣으면 메세지가 반환됨
        // throw new HttpException('hi', HttpStatus.FORBIDDEN);
        /**
         *  {
         *    "statusCode": 403,
         *    "message": "hi"
         *  }
         */

        //객체를 넣으면 메세지를 커스텀 할 수 있다.
        throw new HttpException({
            httpExceptionMessage : 'ze',
            b : 'b'
        }, HttpStatus.FORBIDDEN);
        /**
         * {
         *   "httpExceptionMessage": "ze",
         *   "b": "b"
         * }
         */
    }

    /**
     * UseFilters를 이용해 예외 발생시 필터를 태울 수 있다.
     *
     * 응답 객체도 변경할 수 있음.
     */
    @Get('filter')
    // @UseFilters(HttpExceptionFilter)
    // @UseFilters(new HttpExceptionFilter())
    @UseFilters(AllExceptionsFilter,HttpExceptionFilter) // 뒤에 선언한 필터가 먼저 실행된다..
    exceptFilter() {
        //객체를 넣으면 메세지를 커스텀 할 수 있다.
        throw new HttpException('오류 발생 필터 처리.', HttpStatus.FORBIDDEN) }
}
