import { Module } from '@nestjs/common';
import { XmlFiltersService } from './xml-filters.service';
import { XmlFiltersController } from './xml-filters.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {XmlFilter} from "./xml-filter.entity";

@Module({
  imports: [TypeOrmModule.forFeature([XmlFilter])],
  providers: [XmlFiltersService],
  controllers: [XmlFiltersController]
})
export class XmlFiltersModule {}
