import { Module } from '@nestjs/common';
import { DesignerCollectionService } from './designer-collection.service';
import { DesignerCollectionController } from './designer-collection.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DesignerCollection} from "./designer-collection.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DesignerCollection])],
  providers: [DesignerCollectionService],
  controllers: [DesignerCollectionController]
})
export class DesignerCollectionModule {}
