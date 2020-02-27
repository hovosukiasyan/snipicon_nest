import {Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {ApiParam, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Filter} from "../filters/filter.entity";
import {XmlGradientsService} from "./xml-gradients.service";

@ApiTags('XML Gradients')
@Controller('api')
export class XmlGradientsController {
    constructor(private service: XmlGradientsService) { }

    @Get('xmlGradients')
    @ApiResponse({ status: 200, description: 'All messages'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiQuery({ name: 'gradient',required:false})

    getAll(@Query('gradient') gradient){
        return this.service.getXmlGradients(gradient);
    }


    @Get('xmlGradient/:id')
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiParam({ name: 'id', required: true, description: 'XML Gradient ID' })

    async get(@Param('id') id:number) {
        const xmlGradient = await this.service.findById(id);

        if (!xmlGradient) {
            throw new HttpException(`XML Gradient with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.getXmlGradient(id);
    }


    @Post('xmlGradient')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiQuery({ name: 'gradient',required:true})
    async create(
        @Query('gradient') gradient: string,
    ) {
        const xmlGradientCheck = await this.service.findXmlGradient(gradient);
        if (xmlGradientCheck) {
            throw new HttpException(`XML Gradient with Gradient ${gradient} already exist`, HttpStatus.CONFLICT);
        }
        return this.service.createXmlGradient(gradient);
    }


    @Put('xmlGradient/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true })
    @ApiQuery({ name: 'gradient',required:true})
    async update(
        @Param('id') id: number,
        @Query('gradient') gradient: string ,
    ) {
        const idCheck = await this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`XML Gradient with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.updateXmlGradient(id,gradient);
    }


    @Delete('xmlGradient/:id')
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiResponse({ status: 200, description: 'One message'})
    @ApiParam({ name: 'id', required: true })
    async delete(@Param('id') id:number) {
        const idCheck = await this.service.findById(id);
        if (!idCheck) {
            throw new HttpException(`XML Gradient with id ${id} doesn't exist`, HttpStatus.NOT_FOUND);
        }

        return this.service.deleteXmlGradient(id);
    }
}
