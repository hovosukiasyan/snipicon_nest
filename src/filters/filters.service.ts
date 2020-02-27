import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Filter} from "./filter.entity";

@Injectable()
export class FiltersService {
    constructor(@InjectRepository(Filter) private filterRepository: Repository<Filter>) { }

    async findFilter(icon_id: number): Promise<Filter> {
        const filter = await this.filterRepository.findOne({ icon_id });
        return new Promise(resolve => {
            resolve(filter);
        });
    }

    async findById(id: number): Promise<Filter> {
        const filter =  await this.filterRepository.findOne({id});
        return new Promise(resolve => {
            resolve(filter);
        });
    }

    async getFilters(): Promise<Filter[]> {
            return await this.filterRepository.find();
    }

    async getFilter(id: number): Promise<Filter> {
        return await this.filterRepository.findOne(id);
    }

    async createFilter(icon_id:number,xml_filter_id: number, filter: Filter) {
        const new_filter = new Filter;
        new_filter.icon_id = icon_id;
        new_filter.xml_filter_id = xml_filter_id;
        return await this.filterRepository.save(new_filter);
    }



    async updateFilter(id:number,icon_id: number, xml_filter_id:number) {
        this.filterRepository.update({id:id}, {icon_id:icon_id,xml_filter_id:xml_filter_id});
        return await this.filterRepository.findOne(id);
    }

    async deleteFilter(id: number) {
        this.filterRepository.delete(id);
        return await "SUCCESS!!! Filter was deleted";
    }
}
