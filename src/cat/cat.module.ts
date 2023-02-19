import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Board} from "../boards/board.entity";
import {TestModule} from "../test/test.module";

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  controllers: [CatController],
  providers: [{
    provide: CatService,
    useClass: CatService
  }]
})
export class CatModule {}
