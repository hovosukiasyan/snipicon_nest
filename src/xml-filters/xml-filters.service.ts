import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Like, Repository} from "typeorm";
import {XmlFilter} from "./xml-filter.entity";

@Injectable()
export class XmlFiltersService {
    constructor(@InjectRepository(XmlFilter) private xmlFilterRepository: Repository<XmlFilter>) { }

    async findXmlFilter(filter: string): Promise<XmlFilter> {
        const xml_filter = await this.xmlFilterRepository.findOne({ filter });
        return new Promise(resolve => {
            resolve(xml_filter);
        });
    }

    async findById(id: number): Promise<XmlFilter> {
        const filter =  await this.xmlFilterRepository.findOne({id});
        return new Promise(resolve => {
            resolve(filter);
        });
    }

    async getXmlFilters(filter: string): Promise<XmlFilter[]> {
        if (filter){
            return await this.xmlFilterRepository.find({
                where: [{ filter: Like(`%${filter}%`) } ],
            })
        }else{
            return await this.xmlFilterRepository.find();
        }
    }

    async getXmlFilter(id: number): Promise<XmlFilter> {
        return await this.xmlFilterRepository.findOne(id);
    }

    async createXmlFilter(filter: string) {
        const new_xml_filter = new XmlFilter();
        new_xml_filter.filter = filter;
        return await this.xmlFilterRepository.save(new_xml_filter);
    }



    async updateXmlFilter(id:number,filter: string) {
        this.xmlFilterRepository.update({id:id}, {filter:filter});
        return await this.xmlFilterRepository.findOne(id);
    }

    async deleteXmlFilter(id: number) {
        this.xmlFilterRepository.delete(id);
        return await "SUCCESS!!! XML Filter was deleted";
    }
}
