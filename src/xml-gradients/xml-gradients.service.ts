import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Like, Repository} from "typeorm";
import {XmlGradient} from "./xml-gradient.entity";

@Injectable()
export class XmlGradientsService {
    constructor(@InjectRepository(XmlGradient) private xmlGradientRepository: Repository<XmlGradient>) { }

    async findXmlGradient(gradient: string): Promise<XmlGradient> {
        const xml_gradient = await this.xmlGradientRepository.findOne({ gradient });
        return new Promise(resolve => {
            resolve(xml_gradient);
        });
    }

    async findById(id: number): Promise<XmlGradient> {
        const gradient =  await this.xmlGradientRepository.findOne({id});
        return new Promise(resolve => {
            resolve(gradient);
        });
    }

    async getXmlGradients(gradient: string): Promise<XmlGradient[]> {
        if (gradient){
            return await this.xmlGradientRepository.find({
                where: [{ gradient: Like(`%${gradient}%`) } ],
            })
        }else{
            return await this.xmlGradientRepository.find();
        }
    }

    async getXmlGradient(id: number): Promise<XmlGradient> {
        return await this.xmlGradientRepository.findOne(id);
    }

    async createXmlGradient(gradient: string) {
        const new_xml_gradient = new XmlGradient();
        new_xml_gradient.gradient = gradient;
        return await this.xmlGradientRepository.save(new_xml_gradient);
    }



    async updateXmlGradient(id:number,gradient: string) {
        this.xmlGradientRepository.update({id:id}, {gradient:gradient});
        return await this.xmlGradientRepository.findOne(id);
    }

    async deleteXmlGradient(id: number) {
        this.xmlGradientRepository.delete(id);
        return await "SUCCESS!!! XML Gradient was deleted";
    }
}
