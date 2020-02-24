import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {MinimisedIcon} from "./minimised-icon.entity";

@Injectable()
export class MinimisedIconsService {
    constructor(@InjectRepository(MinimisedIcon) private minimisedIconRepository: Repository<MinimisedIcon>) { }

    async getMinimisedIcons(minimisedIcon: MinimisedIcon): Promise<MinimisedIcon[]> {
        return await this.minimisedIconRepository.find();
    }

    async getMinimisedIcon(id: number): Promise<MinimisedIcon[]> {
        return await this.minimisedIconRepository.find({
            where: [{ "id": id }]
        });
    }

    async createMinimisedIcon(minimisedIcon: MinimisedIcon) {
        this.minimisedIconRepository.save(minimisedIcon);
    }

    async deleteMinimisedIcon(minimisedIcon: MinimisedIcon) {
        this.minimisedIconRepository.delete(minimisedIcon);
    }
}
