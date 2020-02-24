import { Controller } from '@nestjs/common';
import {Body, Delete, Get, Param, Post} from '@nestjs/common';
import {StandartisedIconsService} from "./standartised-icons.service";
import {StandartisedIcon} from "./standartised-icon.entity";


@Controller('standartised-icons')
export class StandartisedIconsController {
    constructor(private service: StandartisedIconsService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getStandartisedIcon(params.id);
    }

    @Post()
    create(@Body() standartisedIcon: StandartisedIcon) {
        return this.service.createStandartisedIcon(standartisedIcon);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteStandartisedIcon(params.id);
    }
}
