import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Project} from "./project.entity";


@Injectable()
export class ProjectsService {
    constructor(@InjectRepository(Project) private projectsRepository: Repository<Project>) { }

    async getProjects(project: Project): Promise<Project[]> {
        return await this.projectsRepository.find();
    }

    async getProject(id: number): Promise<Project[]> {
        return await this.projectsRepository.find({
            select: ["name"],
            where: [{ "id": id }]
        });
    }

    async createProject(project: Project) {
        this.projectsRepository.save(project);
    }

    // async updateProject(project: Project) {
    //     this.projectsRepository.save(Project)
    // }

    async deleteProject(project: Project) {
        this.projectsRepository.delete(project);
    }
}
