import {Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {DesignerCollectionService} from "./designer-collection.service";
import {DesignerCollection} from "./designer-collection.entity";
import {ApiParam, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";
import {StateType} from "./enum/stateType";

@ApiTags('Designer Collections')
@Controller('api')
export class DesignerCollectionController {
    constructor(private service: DesignerCollectionService) { }

    @Get('designer-collections')
    @ApiResponse({ status: 200, description: 'All messages'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiQuery({ name: 'name',required:false})

    getAll(@Query('name') name: string) {
        return this.service.getDesignerCollections(name);
    }

    @Get('designer-collections/:id')
    @ApiResponse({ status: 200, description: 'All messages'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiParam({ name: 'id', required: true, description: 'Designer Collection ID' })

    async get(@Param('id') id:number) {
        const designerCollection = await this.service.findById(id);

        if (!designerCollection) {
            throw new HttpException(`Designer Collection with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.getDesignerCollection(id);
    }

    @Post('designer-collection')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiQuery({ name: 'name',required:true})
    async create(@Query('name') name: string, designerCollection: DesignerCollection) {
        const desinerCollectionCheck = await this.service.findDesignerCollection(name);
        if (desinerCollectionCheck) {
            throw new HttpException(`Designer Collection with name ${name} already exist`, HttpStatus.CONFLICT);
        }

        return this.service.createDesignerCollection(name,designerCollection);
    }

    @Put('designer-collection/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true, description: 'Designer Collection ID' })
    @ApiQuery({ name: 'state',required:true, enum: StateType})
    @ApiQuery({ name: 'owner_id',required:true})
    @ApiQuery({ name: 'license_type',required:true})
    @ApiQuery({ name: 'name',required:true})
    async update(
        @Param('id') id: number,
        @Query('name') name: string,
        @Query('license_type') license_type: string,
        @Query('owner_id') owner_id: number,
        @Query('state') state : boolean,
        
        designer_collection: DesignerCollection
    ) {
        const idCheck = await this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`Designer Collection with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }
        return this.service.updateDesignerCollection(state,owner_id,license_type,name,id,designer_collection);
    }

    @Delete('designer-collection/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true })
    async delete(@Param('id') id:number) {
        const idCheck = await this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`Designer Collection with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }
        return this.service.deleteDesignerCollection(id);
    }
}
