import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Like, Repository} from 'typeorm';
import {DesignerCollection} from "./designer-collection.entity";
import {IconTwin} from "../icon-twins/icon-twin.entity";

@Injectable()
export class DesignerCollectionService {

    constructor(@InjectRepository(DesignerCollection) private designerCollectionRepository: Repository<DesignerCollection>) { }

    async findDesignerCollection(name: string): Promise<DesignerCollection> {
        return await this.designerCollectionRepository.findOne({ name: name });
    }

    async findById(id: number): Promise<DesignerCollection> {
        return await this.designerCollectionRepository.findOne({ id: id });
    }

    async getDesignerCollections(designerCollection: DesignerCollection): Promise<DesignerCollection[]> {
        if (name){
            return await this.designerCollectionRepository.find({
                where: [{ name: Like(`%${name}%`) } ],
            })
        }else {
            return await this.designerCollectionRepository.find();
        }
    }

    async createDesignerCollection(name: string,designerCollection: DesignerCollection) {
        const new_designer_collection = new DesignerCollection;
        new_designer_collection.name = name;
        this.designerCollectionRepository.save(new_designer_collection);
    }

    async updateDesignerCollection(state: boolean,name: string, id:number, designerCollection: DesignerCollection) {
        this.designerCollectionRepository.update({id:id}, {state:state, name: name, id: id });
        return await this.designerCollectionRepository.find({
            where: [{ "id": id }]
        });
    }

    async deleteDesignerCollection(id: number) {
        this.designerCollectionRepository.update({id:id},{is_deleted:true});
        return await this.designerCollectionRepository.find({
            where: [{ "id": id }]
        });
    }
}
