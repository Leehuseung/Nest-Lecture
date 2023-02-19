import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('liveLogs')
export class LiveLogsEntity {

    constructor(method: string, statusCode: number, remoteIp: string, url: string, userAgent: string, stacktrace: string, requestData: object, responseData: object) {
        this.method = method;
        this.statusCode = statusCode;
        this.remoteIp = remoteIp;
        this.url = url;
        this.userAgent = userAgent;
        this.stacktrace = stacktrace;
        this.requestData = requestData;
        this.responseData = responseData;
    }

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    method: string;

    @Column()
    statusCode: number;

    @Column({
        nullable: true
    })
    remoteIp: string;

    @Column()
    url: string;

    @Column({
        nullable: true
    })
    userAgent: string;

    @Column({
        type: "text",
        nullable: true
    })
    stacktrace: unknown;

    @Column({
        type: "json",
        nullable: true
    })
    requestData: object;

    @Column({
        type: "json",
        nullable: true
    })
    responseData: object;

    @CreateDateColumn({type: "datetime", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;


}