import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { NormalisedIcon } from './normalised-icon.entity'

@Injectable()
export class NormalisedIconsService {
    constructor(@InjectRepository(NormalisedIcon) private normalisedIconRepository: Repository<NormalisedIcon>) { }

    async getNormalisedIcons(normalisedIcon: NormalisedIcon): Promise<NormalisedIcon[]> {
        return await this.normalisedIconRepository.find();
    }

    async getNormalisedIcon(id: number): Promise<NormalisedIcon[]> {
        return await this.normalisedIconRepository.find({
            where: [{ "id": id }]
        });
    }

    async createNormalisedIcon(normalisedIcon: NormalisedIcon) {
        this.normalisedIconRepository.save(normalisedIcon);
    }

    async deleteNormalisedIcon(normalisedIcon: NormalisedIcon) {
        this.normalisedIconRepository.delete(normalisedIcon);
    }
}
