import { Controller, Get, HttpException, HttpStatus, Post, Query} from '@nestjs/common';
import {ProjectsService} from "../projects/projects.service";
import {Project} from "../projects/project.entity";
import {ApiParam, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Project')
@Controller('api')
export class ProjectsController {
    constructor(private service: ProjectsService) { }

    @Get('/projects')
    @ApiResponse({ status: 200, description: 'All messages'})
    @ApiResponse({ status: 404, description: 'Not found.'})
    @ApiQuery({ name: 'name',required:false})

    getAll(@Query('name') name){
        return this.service.getProjects(name);
    }

    @Post('/project')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiQuery({ name: 'name',required:false})
    async create(@Query('name') name, project: Project) {


        if (!name) {
            throw new HttpException('name is required', HttpStatus.BAD_REQUEST);
        }

        const projectCheck = await this.service.findProject(name);
        if (projectCheck) {
            throw new HttpException(`Project with name ${name} already exist`, HttpStatus.CONFLICT);
        }
        return this.service.createProject(name,project);
    }
}
