import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {IconTwin} from "./icon-twin.entity";

@Injectable()
export class IconTwinsService {

    constructor(@InjectRepository(IconTwin) private iconTwinRepository: Repository<IconTwin>) { }

    async getIconTwins(iconTwin: IconTwin): Promise<IconTwin[]> {
        return await this.iconTwinRepository.find();
    }

    async getIconTwin(id: number): Promise<IconTwin[]> {
        return await this.iconTwinRepository.find({
            select: ["name"],
            where: [{ "id": id }]
        });
    }

    async createIconTwin(iconTwin: IconTwin) {
        this.iconTwinRepository.save(iconTwin);
    }

    // async updateTag(iconTwin: IconTwin) {
    //     this.iconTwinRepository.save(iconTwin)
    // }

    async deleteIconTwin(iconTwin: IconTwin) {
        this.iconTwinRepository.delete(iconTwin);
    }
}