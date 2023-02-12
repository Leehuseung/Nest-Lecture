import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

    a() {
        console.log('/test service request');
    }
}
