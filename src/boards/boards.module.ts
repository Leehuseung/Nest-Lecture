import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
//nest g co boards
@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
