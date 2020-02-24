import { Controller } from '@nestjs/common';
import {Body, Delete, Get, Param, Post} from '@nestjs/common';
import { NormalisedIconsService } from './normalised-icons.service';
import { NormalisedIcon } from './normalised-icon.entity';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Normalised Icons')
@Controller('normalised-icons')
export class NormalisedIconsController {
    constructor(private service: NormalisedIconsService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getNormalisedIcon(params.id);
    }

    @Post()
    create(@Body() normalisedIcon: NormalisedIcon) {
        return this.service.createNormalisedIcon(normalisedIcon);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteNormalisedIcon(params.id);
    }
}
