import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Like, Repository} from 'typeorm';
import {Tag} from "./tag.entity";

@Injectable()
export class TagsService {

    constructor(@InjectRepository(Tag) private tagsRepository: Repository<Tag>) { }

    async findTag(name: string): Promise<Tag> {
        return await this.tagsRepository.findOne({ name: name });
    }

    async findById(id: number) {
        return await this.tagsRepository.find();
        // console.log(tag);return;
        // if (!user) {
        //     return null;
        // }
        return await this.tagsRepository.findOne({id});
    }

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
            where: [{ "id": id }]
        });
    }

    async createTag(name:string,tag: Tag) {
        const new_tag = new Tag;
        new_tag.name = name;
        return await this.tagsRepository.save(new_tag);
    }



    async updateTag(name: string,id:number, tag: Tag) {
        this.tagsRepository.update({id:id}, {name:name});
        return await this.tagsRepository.find({
            where: [{ "id": id }]
        });
    }

    async deleteTag(id: number) {
        this.tagsRepository.update({id:id},{is_deleted:true});
        return await this.tagsRepository.find({
            where: [{ "id": id }]
        });
    }
}
