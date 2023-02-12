import {Controller, Get, HttpException, HttpStatus, InternalServerErrorException} from '@nestjs/common';
import {TestService} from "./test.service";

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
        /*
         {
            "statusCode": 403,
            "message": "hi"
        }
         */

        //객체를 넣으면 메세지를 커스텀 할 수 있다.
        throw new HttpException({
            httpExceptionMessage : 'ze',
            b : 'b'
        }, HttpStatus.FORBIDDEN);
        // {
        //     "httpExceptionMessage": "ze",
        //     "b": "b"
        // }

    }
}
