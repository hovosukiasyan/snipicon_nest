import { Controller, Post, Body, Get, Delete,Param} from '@nestjs/common';
import {TagsService} from "./tags.service";
import {Tag} from "./tag.entity";
import {ApiTags} from "@nestjs/swagger";
@ApiTags('tags')
@Controller('tags')
export class TagsController {

    constructor(private service: TagsService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getTag(params.id);
    }

    @Post()
    create(@Body() tag: Tag) {
        return this.service.createTag(tag);
    }

    // @Put()
    // update(@Body() tag: Tag) {
    //     return this.service.updateTag(tag);
    // }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteTag(params.id);
    }
}