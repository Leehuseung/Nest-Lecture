import {Module} from '@nestjs/common';
import {BoardsController} from './boards.controller';
import {BoardsService} from './boards.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BoardE} from "./board.entity";

//nest g co boards
@Module({
  imports: [TypeOrmModule.forFeature([BoardE])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
