import { Controller } from '@nestjs/common';
import {CatService} from "./cat.service";

@Controller('cat')
export class CatController {
    constructor(private catService: CatService) {}

    findAll() {
        this.catService.test();
        return this.catService.findAll();
    }



}
