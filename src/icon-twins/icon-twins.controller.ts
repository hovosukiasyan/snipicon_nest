import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {IconTwinsService} from "./icon-twins.service";
import {IconTwin} from "./icon-twin.entity";

@Controller('icon-twins')
export class IconTwinsController {
    constructor(private service: IconTwinsService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getIconTwin(params.id);
    }

    @Post()
    create(@Body() iconTwin: IconTwin) {
        return this.service.createIconTwin(iconTwin);
    }

    // @Put()
    // update(@Body() iconTwin: IconTwin) {
    //     return this.service.updateIconTwin(iconTwin);
    // }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteIconTwin(params.id);
    }
}
