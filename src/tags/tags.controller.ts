import { Controller, Post, Body, Get, Delete,Param, Put, Res, HttpStatus} from '@nestjs/common';
import {TagsService} from "./tags.service";
import {Tag} from "./tag.entity";
import {ApiTags, ApiParam, ApiResponse} from "@nestjs/swagger";

@ApiTags('Tags')
@Controller('tags')
export class TagsController {

    constructor(private service: TagsService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'All messages', type: Tag})
    @ApiResponse({ status: 404, description: 'Not found.'})
    getAll(@Param() params){
        return this.service.getTags();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'One message', type: Tag})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiParam({ name: 'id', required: true, description: 'Tag Name' })
    get(@Param() params) {
        return this.service.getTag(params.id);
    }
    

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiParam({ name: 'name', required: true })
    create(@Body() tag: Tag, @Res() response) {
        return this.service.createTag(tag)
            .then( res => {
                response.status(HttpStatus.CREATED).json(res);
            })
            .catch( ex => {
                response.status(HttpStatus.FORBIDDEN).json({ex,  message: 'forbidden' });
            });
    }

    // @Put()
    // @ApiParam({ name: 'name', required: true })
    // update(@Body() tag: Tag) {
    //     return this.service.updateTag(tag);
    // }

    @Delete(':id')
    @ApiParam({ name: 'id', required: true })
    deleteUser(@Param() params) {
        return this.service.deleteTag(params.id);
    }
}