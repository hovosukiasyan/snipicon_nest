import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Like, Repository} from 'typeorm';
import {Tag} from "./tag.entity";

@Injectable()
export class TagsService {

    constructor(@InjectRepository(Tag) private tagsRepository: Repository<Tag>) { }

    async getTags(name: string): Promise<Tag[]> {
        if (name){
            return await this.tagsRepository.find({
                where: [{ name: Like(`%${name}%`) } ],
            })
        }else{
            return await this.tagsRepository.find();
        }

    }

    async getTag(id: number): Promise<Tag[]> {
        return await this.tagsRepository.find({
            select: ["name"],
            where: [{ "id": id }]
        });
    }

    async createTag(tag: Tag) {
        this.tagsRepository.save(tag);
    }

    // async updateTag(tag: Tag) {
    //     this.tagsRepository.save(tag)
    // }

    async deleteTag(id: number) {
        this.tagsRepository.update({id:id},{is_deleted:true});
    }
}
