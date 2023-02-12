import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

    a() {
        console.log('a Service');
    }
}
