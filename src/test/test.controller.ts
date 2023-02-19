import {
    BadRequestException,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    InternalServerErrorException,
    Param, ParseIntPipe, Query,
    UseFilters, UseInterceptors
} from '@nestjs/common';
import {TestService} from "./test.service";
import {HttpExceptionFilter} from "./exception/HttpExceptionFilter";
import {LoggingInterceptor} from "../interceptor/loggin.interceptor";

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
    // @UseFilters(AllExceptionsFilter,HttpExceptionFilter) // 뒤에 선언한 필터가 먼저 실행된다..
    exceptFilter() {
        //객체를 넣으면 메세지를 커스텀 할 수 있다.
        throw new HttpException('오류 발생 필터 처리.', HttpStatus.FORBIDDEN)
    }

    /**
     * 네스트에서 즉시 사용할 수 있는 파이프는 다음과 같다.
     * ValidationPipe
     * ParseIntPipe
     * ParseFloatPipe
     * ParseBoolPipe
     * ParseArrayPipe
     * ParseUUIDPipe
     * ParseEnumPipe
     * DefaultValuePipe
     * ParseFilePipe
     */

    /**
     * binding pipe test
     *
     * Int 만 유효하다. String 보낼경우 예외발생.
     * {
     *  "statusCode": 400,
     *  "message": "Validation failed (numeric string is expected)",
     *  "error": "Bad Request"
     * }
     */
    @Get('int/:id')
    intPipe(@Param('id', ParseIntPipe) id: number){
        console.log(id);
    }

    /**
     * binding pipe test
     *
     * Query에도 적용할 수 있다.
     * {
     *  "statusCode": 400,
     *  "message": "Validation failed (numeric string is expected)",
     *  "error": "Bad Request"
     * }
     */
    @Get('int')
    intQueryPipe(@Query('id', ParseIntPipe) id: number){
        console.log(id);
    }

    @Get('intercept')
    // @UseInterceptors(LoggingInterceptor)
    intercept(){
        return 'intercept';
    }

    @Get('logs')
    log() {
        throw new BadRequestException();
        return {
            result : 'success',
        };
    }
}
