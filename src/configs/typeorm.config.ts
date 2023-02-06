import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {Board} from "../boards/board.entity";
import {Test} from "../boards/test.entity";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest',
    entities: [Board, Test],//__dirname + '/../**/*.entity.{js,ts}'
    synchronize: false,
    logging: true
}