import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ProjectsService} from "../projects/projects.service";
import {Project} from "../projects/project.entity";

@Controller('projects')
export class ProjectsController {
    constructor(private service: ProjectsService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getProject(params.id);
    }

    @Post()
    create(@Body() project: Project) {
        return this.service.createProject(project);
    }

    // @Put()
    // update(@Body() tag: Tag) {
    //     return this.service.updateTag(tag);
    // }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteProject(params.id);
    }
}
