import { Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {IconTwinsService} from "./icon-twins.service";
import {IconTwin} from "./icon-twin.entity";
import {ApiParam, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";
import {GridSize} from "./enum/gridSize";

@ApiTags('Icon Twins')
@Controller('api/iconTwin')
export class IconTwinsController {
    constructor(private service: IconTwinsService) { }

    @Get('')
    @ApiResponse({ status: 200, description: 'All messages'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiQuery({ name: 'name',required:false})
    getAll(@Query('name') name) {
        return this.service.getIconTwins(name);
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'All messages'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiParam({ name: 'id', required: true, description: 'IconTwin ID' })

    get(@Param('id') id:number) {
        const idCheck = this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`IconTwin with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.getIconTwin(id);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiQuery({ name: 'grid_size',required:true, enum: GridSize})
    @ApiQuery({ name: 'owner_id',required:true})
    @ApiQuery({ name: 'name',required:true})
    create(
        @Query('grid_size') grid_size,
        @Query('owner_id') owner_id,
        @Query('name') name,
        iconTwin: IconTwin
    ) {
        if (!name) {
            throw new HttpException('name is required', HttpStatus.BAD_REQUEST);
        }

        const iconTwinCheck = this.service.findIconTwin(name);
        if (!iconTwinCheck) {
            throw new HttpException(`IconTwin with name ${name} already exist`, HttpStatus.CONFLICT);
        }

        return this.service.createIconTwin(name, grid_size, owner_id, iconTwin);
    }

    @Put(':id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiQuery({ name: 'grid_size',required:true, enum: GridSize})
    @ApiQuery({ name: 'owner_id',required:true})
    @ApiQuery({ name: 'name',required:true})
    update(@Query('grid_size') grid_size,
           @Query('owner_id') owner_id,
           @Query('name') name,
           @Param('id') id: number ,
           iconTwin: IconTwin) {
        const idCheck = this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`IconTwin with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.updateIconTwin(name,grid_size,owner_id,id,iconTwin);
    }

    @Delete(':id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true })
    delete(@Param('id') id:number) {
        const idCheck = this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`IconTwin with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.deleteIconTwin(id);
    }
}
