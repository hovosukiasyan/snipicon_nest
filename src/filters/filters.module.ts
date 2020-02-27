import { Module } from '@nestjs/common';
import { FiltersService } from './filters.service';
import { FiltersController } from './filters.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Filter} from "./filter.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Filter])],
  providers: [FiltersService],
  controllers: [FiltersController]
})
export class FiltersModule {}
