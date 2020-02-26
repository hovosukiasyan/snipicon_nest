import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Like, Repository} from "typeorm";
import {Project} from "./project.entity";


@Injectable()
export class ProjectsService {
    constructor(@InjectRepository(Project) private projectsRepository: Repository<Project>) { }

    async findProject(name: string): Promise<Project> {
        return await this.projectsRepository.findOne({ name: name });
    }

    async getProjects(name: string): Promise<Project[]> {
        if (name){
            return await this.projectsRepository.find({
                where: [{ name: Like(`%${name}%`) } ],
            })
        }else{
            return await this.projectsRepository.find();
        }
    }

    async createProject(name: string, project: Project) {
        const new_project = new Project;
        new_project.name = name;
        this.projectsRepository.save(new_project);
    }

}
