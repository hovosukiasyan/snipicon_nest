import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {DesignerCollectionService} from "./designer-collection.service";
import {DesignerCollection} from "./designer-collection.entity";
import {ApiParam, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Designer Collections')
@Controller('api/')
export class DesignerCollectionController {
    constructor(private service: DesignerCollectionService) { }

    @Get('designer-collections')
    @ApiResponse({ status: 200, description: 'All messages'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiQuery({ name: 'name',required:false})

    getAll(@Query('name') name) {
        return this.service.getDesignerCollections(name);
    }

    @Post('designer-collection')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiQuery({ name: 'name',required:false})
    create(@Query('name') name, designerCollection: DesignerCollection) {
        if (!name) {
            throw new HttpException('name is required', HttpStatus.BAD_REQUEST);
        }

        const desinerCollectionCheck = this.service.findDesignerCollection(name);
        if (!desinerCollectionCheck) {
            throw new HttpException(`Designer Collection with name ${name} already exist`, HttpStatus.CONFLICT);
        }

        return this.service.createDesignerCollection(name,designerCollection);
    }

    @Put('designer-collection/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiQuery({ name: 'state',required:false})
    @ApiQuery({ name: 'name',required:false})
    @ApiQuery({ name: 'id',required:false})
    update(
        @Query('state') state,
        @Query('name') name,
        @Param('id') id: number,
        designer_collection: DesignerCollection
    ) {
        const idCheck = this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`Designer Collection with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }
        return this.service.updateDesignerCollection(state,name,id,designer_collection);
    }

    @Delete('designer-collection/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true })
    deleteUser(@Param('id') id:number) {
        const idCheck = this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`Designer Collection with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }
        return this.service.deleteDesignerCollection(id);
    }
}
