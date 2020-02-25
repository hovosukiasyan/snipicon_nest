import {Controller, Post, Body, Get, Delete, Param, Put, Query} from '@nestjs/common';
import {TagsService} from "./tags.service";
import {Tag} from "./tag.entity";
import {ApiTags, ApiParam, ApiResponse, ApiHeader, ApiQuery} from "@nestjs/swagger";

@ApiTags('Tag')
@Controller('api')
export class TagsController {

    constructor(private service: TagsService) { }

    @Get('/tags')
    @ApiResponse({ status: 200, description: 'All messages'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiQuery({ name: 'name',required:false})

    getAll(@Query('name') name){
        return this.service.getTags(name);
    }

    @Get('tag/:id')
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiParam({ name: 'id', required: true, description: 'Tag Name' })
    
    get(@Param() params) {
        return this.service.getTag(params.id);
    }
    

    @Post('tag')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiResponse({ status: 409, description: 'This record already exists.'})
    @ApiQuery({ name: 'name',required:false})


    create(@Query('name') name, tag: Tag) {
        return this.service.createTag(name,tag);
    }

    @Put('tag/:id')
    @ApiQuery({ name: 'name',required:false})
    update(@Query('name') name,@Param('id') id: number , tag: Tag) {
        return this.service.updateTag(name,id,tag);
    }

    @Delete('tag/:id')
    @ApiParam({ name: 'id', required: true })
    delete(@Param() params) {
        return this.service.deleteTag(params.id);
    }
}
