import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {IconTwin} from "../icon-twins/icon-twin.entity";
import {Repository} from "typeorm";
import {StandartisedIcon} from "./standartised-icon.entity";

@Injectable()
export class StandartisedIconsService {
    constructor(@InjectRepository(StandartisedIcon) private standartisedIconRepository: Repository<StandartisedIcon>) { }

    async getStandartisedIcons(standartisedIcon: StandartisedIcon): Promise<IconTwin[]> {
        return await this.standartisedIconRepository.find();
    }

    async getStandartisedIcon(id: number): Promise<IconTwin[]> {
        return await this.standartisedIconRepository.find({
            where: [{ "id": id }]
        });
    }

    async createStandartisedIcon(standartisedIcon: StandartisedIcon) {
        this.standartisedIconRepository.save(standartisedIcon);
    }

    async deleteStandartisedIcon(standartisedIcon: StandartisedIcon) {
        this.standartisedIconRepository.delete(standartisedIcon);
    }
}
