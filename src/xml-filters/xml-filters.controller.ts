import {Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {ApiParam, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";
import {XmlFiltersService} from "./xml-filters.service";

@ApiTags('XML Filters')
@Controller('api')
export class XmlFiltersController {
    constructor(private service: XmlFiltersService) { }

    @Get('xmlFilters')
    @ApiResponse({ status: 200, description: 'All messages'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiQuery({ name: 'filter',required:false})

    getAll(@Query('filter') filter){
        return this.service.getXmlFilters(filter);
    }


    @Get('xmlFilter/:id')
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiParam({ name: 'id', required: true, description: 'XML Filter ID' })

    async get(@Param('id') id:number) {
        const xmlFilter = await this.service.findById(id);

        if (!xmlFilter) {
            throw new HttpException(`XML Filter with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.getXmlFilter(id);
    }


    @Post('xmlFilter')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiQuery({ name: 'filter',required:true})
    async create(
        @Query('filter') filter: string,
    ) {
        const xmlFilterCheck = await this.service.findXmlFilter(filter);
        if (xmlFilterCheck) {
            throw new HttpException(`XML Filter with filter ${filter} already exist`, HttpStatus.CONFLICT);
        }
        return this.service.createXmlFilter(filter);
    }


    @Put('xmlFilter/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true })
    @ApiQuery({ name: 'filter',required:true})
    async update(
        @Param('id') id: number,
        @Query('filter') filter: string ,
    ) {
        const idCheck = await this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`XML Filter with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.updateXmlFilter(id,filter);
    }


    @Delete('xmlFilter/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true })
    async delete(@Param('id') id:number) {
        const idCheck = await this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`XML Filter with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.deleteXmlFilter(id);
    }
}
