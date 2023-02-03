/**
 * PipeTransform은 모든 파이프에서 구현해줘야한다.
 * transform 메서드는 두개의 파라미터를 갖는다.
 */
import {BadRequestException, PipeTransform} from "@nestjs/common";
import {BoardStatus} from "../board-status.enum";


export class BoardStatusValidationPipe implements PipeTransform{

    readonly statusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    transform(value: any): any {
        value = value.toUpperCase();

        if(!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} isn't in the status options`);
        }

        return value;
    }

    private isStatusValid(status: any) {
        const index = this.statusOptions.indexOf(status);
        return index !== -1;
    }

}