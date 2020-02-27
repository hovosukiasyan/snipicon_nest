import {Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {ApiTags, ApiResponse, ApiQuery, ApiParam} from "@nestjs/swagger";
import {FiltersService} from "./filters.service";
import {Filter} from "./filter.entity";

@ApiTags('Filters')
@Controller('api')
export class FiltersController {
    constructor(private service: FiltersService) { }

    @Get('filters')
    @ApiResponse({ status: 200, description: 'All messages'})
    @ApiResponse({ status: 404, description: 'Not found.'})

    getAll(){
        return this.service.getFilters();
    }


    @Get('filter/:id')
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiParam({ name: 'id', required: true, description: 'Filter ID' })

    async get(@Param('id') id:number) {
        const filter = await this.service.findById(id);

        if (!filter) {
            throw new HttpException(`Filter with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.getFilter(id);
    }


    @Post('filter')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiQuery({ name: 'icon_id',required:true})
    @ApiQuery({ name: 'xml_filter_id',required:true})
    async create(
        @Query('icon_id') icon_id: number,
        @Query('xml_filter_id') xml_filter_id: number,
        filter: Filter
    ) {
        const filterCheck = await this.service.findFilter(icon_id);
        if (filterCheck) {
            throw new HttpException(`Filter with Icon ID ${icon_id} already exist`, HttpStatus.CONFLICT);
        }
        return this.service.createFilter(icon_id, xml_filter_id, filter);
    }


    @Put('filter/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true })
    @ApiQuery({ name: 'icon_id',required:true})
    @ApiQuery({ name: 'xml_filter_id',required:true})
    async update(
        @Param('id') id: number,
        @Query('icon_id') icon_id: number ,
        @Query('xml_filter_id') xml_filter_id: number ,
    ) {
        const idCheck = await this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`Filter with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.updateFilter(id,icon_id, xml_filter_id);
    }


    @Delete('filter/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true })
    async delete(@Param('id') id:number) {
        const idCheck = await this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`Filter with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.deleteFilter(id);
    }
}
