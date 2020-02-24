import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {DesignerCollection} from "./designer-collection.entity";

@Injectable()
export class DesignerCollectionService {

    constructor(@InjectRepository(DesignerCollection) private designerCollectionRepository: Repository<DesignerCollection>) { }

    async getDesignerCollections(designerCollection: DesignerCollection): Promise<DesignerCollection[]> {
        return await this.designerCollectionRepository.find();
    }

    async getDesignerCollection(id: number): Promise<DesignerCollection[]> {
        return await this.designerCollectionRepository.find({
            select: ["name"],
            where: [{ "id": id }]
        });
    }

    async createDesignerCollection(designerCollection: DesignerCollection) {
        this.designerCollectionRepository.save(designerCollection);
    }

    // async updateTag(designerCollection: DesignerCollection) {
    //     this.designerCollectionRepository.save(designerCollection)
    // }

    async deleteDesignerCollection(designerCollection: DesignerCollection) {
        this.designerCollectionRepository.delete(designerCollection);
    }
}