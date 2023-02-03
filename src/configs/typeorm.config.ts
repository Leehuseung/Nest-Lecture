import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {Board} from "../boards/board.entity";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest',
    entities: [Board],//__dirname + '/../**/*.entity.{js,ts}'
    synchronize: true,
    logging: true
}