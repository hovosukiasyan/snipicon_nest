import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Tag} from "./tag.entity";
import {Cat} from "../cats/cat";

@Injectable()
export class TagsService {

    constructor(@InjectRepository(Tag) private tagsRepository: Repository<Tag>) { }

    async getTags(tag: Tag): Promise<Tag[]> {
        return await this.tagsRepository.find();
    }

    async getTag(id: number): Promise<Tag[]> {
        return await this.tagsRepository.find({
            select: ["name", "is_deleted"],
            where: [{ "id": id }]
        });
    }

    async createTag(tag: Tag) {
        this.tagsRepository.save(tag);
    }

    // async updateTag(tag: Tag) {
    //     this.tagsRepository.save(tag)
    // }

    async deleteTag(tag: Tag) {
        this.tagsRepository.delete(tag);
    }
}