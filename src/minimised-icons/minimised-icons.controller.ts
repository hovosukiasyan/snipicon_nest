import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {MinimisedIconsService} from "./minimised-icons.service";
import {MinimisedIcon} from "./minimised-icon.entity";

@Controller('minimised-icons')
export class MinimisedIconsController {
    constructor(private service: MinimisedIconsService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getMinimisedIcon(params.id);
    }

    @Post()
    create(@Body() minimisedIcon: MinimisedIcon) {
        return this.service.createMinimisedIcon(minimisedIcon);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteMinimisedIcon(params.id);
    }
}
