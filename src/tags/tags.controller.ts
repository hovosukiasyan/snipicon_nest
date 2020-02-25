import {Controller, Post, Body, Get, Delete, Param, Put, Query} from '@nestjs/common';
import {TagsService} from "./tags.service";
import {Tag} from "./tag.entity";
import {ApiTags, ApiParam, ApiResponse, ApiPropertyOptional, ApiQuery} from "@nestjs/swagger";

@ApiTags('Tag')
@Controller('api')
export class TagsController {

    constructor(private service: TagsService) { }

    @Get('/tags')
    @ApiResponse({ status: 200, description: 'All messages', type: Tag})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiQuery({ name: 'name',required:false})

    getAll(@Query('name') name){
        return this.service.getTags(name);
    }

    @Get('tag/:id')
    @ApiResponse({ status: 200, description: 'One message', type: Tag})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiParam({ name: 'id', required: true, description: 'Tag Name' })
    get(@Param() params) {
        console.log(params.id);
        return this.service.getTag(params.id);
    }
    

    @Post('tag/:name')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiParam({ name: 'name', required: true })
    create(@Body() tag: Tag) {
        return this.service.createTag(tag)
    }
    // async create(@Body() contactData: Contact): Promise<any> {
    //     return this.contactsService.create(contactData);
    // }

    // @Put()
    // @ApiParam({ name: 'name', required: true })
    // update(@Body() tag: Tag) {
    //     return this.service.updateTag(tag);
    // }

    @Delete('tag/:id')
    @ApiParam({ name: 'id', required: true })
    deleteUser(@Param() params) {
        return this.service.deleteTag(params.id);
    }
}
