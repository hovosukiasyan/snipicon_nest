import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Like, Repository} from 'typeorm';
import {IconTwin} from "./icon-twin.entity";
import {Tag} from "../tags/tag.entity";

@Injectable()
export class IconTwinsService {

    constructor(@InjectRepository(IconTwin) private iconTwinRepository: Repository<IconTwin>) { }

    async findIconTwin(name: string): Promise<IconTwin> {
        const iconTwin = await this.iconTwinRepository.findOne({ name });
        return new Promise(resolve => {
            resolve(iconTwin);
        });
    }

    async findById(id: number): Promise<IconTwin> {
        const iconTwinID =  await this.iconTwinRepository.findOne({id});
        return new Promise(resolve => {
            resolve(iconTwinID);
        });
    }

    async getIconTwins(name: string): Promise<IconTwin[]> {
        if (name){
            return await this.iconTwinRepository.find({
                where: [{ name: Like(`%${name}%`) } ],
            })
        }else {
            return await this.iconTwinRepository.find();
        }
    }

    async getIconTwin(id: number): Promise<IconTwin> {
        return await this.iconTwinRepository.findOne(id);
    }

    async createIconTwin(name: string, grid_size: number, owner_id: number, iconTwin: IconTwin) {
        const new_icon_twin = new IconTwin();
        new_icon_twin.name = name;
        new_icon_twin.grid_size = grid_size;
        new_icon_twin.owner_id = owner_id;
        this.iconTwinRepository.save(new_icon_twin);
    }

    async updateIconTwin(name: string,grid_size: number, owner_id: number, id:number, iconTwin: IconTwin) {
        this.iconTwinRepository.update({id:id}, {name:name, grid_size: grid_size, owner_id: owner_id });
        return await this.iconTwinRepository.find({id});
    }

    async deleteIconTwin(id: number) {
        this.iconTwinRepository.update({id:id},{is_deleted:true});
        return await this.iconTwinRepository.find({id});
    }
}
