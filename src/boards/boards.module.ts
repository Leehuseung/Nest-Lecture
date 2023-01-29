import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
//nest g co boards
@Module({
  controllers: [BoardsController],
})
export class BoardsModule {}
