import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BoardStatus} from "./board-status.enum";
@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: BoardStatus;

    @Column({
        nullable: true
    })
    writer: string;

    @CreateDateColumn({type: "datetime"})
    createDate: Date;


}