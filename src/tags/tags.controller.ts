import {Controller, Post, Get, Delete, Param, Put, Query, HttpException, HttpStatus} from '@nestjs/common';
import {TagsService} from "./tags.service";
import {Tag} from "./tag.entity";
import {ApiTags, ApiParam, ApiResponse, ApiQuery} from "@nestjs/swagger";

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
    
    get(@Param('id') id:number) {
        // const idCheck = this.service.findById(id);
        const idCheck = this.service.findById(id).then(res=>{
            console.log('ds',res)
        });
        console.log(idCheck);
        if (!idCheck) {
            throw new HttpException(`Tag with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.getTag(id);
    }
    

    @Post('tag')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiQuery({ name: 'name',required:false})
    create(@Query('name') name, tag: Tag) {


        if (!name) {
            throw new HttpException('name is required', HttpStatus.BAD_REQUEST);
        }

        const tagCheck = this.service.findTag(name);
        if (!tagCheck) {
            throw new HttpException(`Tag with name ${name} already exist`, HttpStatus.CONFLICT);
        }
        return this.service.createTag(name,tag);
    }


    @Put('tag/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiQuery({ name: 'name',required:false})
    update(@Query('name') name,@Param('id') id: number , tag: Tag) {
        const idCheck = this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`Tag with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.updateTag(name,id,tag);
    }


    @Delete('tag/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true })
    delete(@Param('id') id:number) {
        const idCheck = this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`Tag with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.deleteTag(id);
    }
}
