import { Controller } from '@nestjs/common';
import {CatService} from "./cat.service";

@Controller('cat')
export class CatController {
    constructor(private catService: CatService) {}

    findAll() {
        return this.catService.findAll();
    }



}
