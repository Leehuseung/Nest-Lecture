import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {HttpException} from "@nestjs/common";
import {HttpExceptionFilter} from "./test/exception/HttpExceptionFilter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpExceptionFilter()); //전역범위로 에러를 핸들링 하려면 다음과같이 사용하자.
  await app.listen(3000);
}
bootstrap();
