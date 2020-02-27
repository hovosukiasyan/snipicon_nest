import { Module } from '@nestjs/common';
import { XmlGradientsService } from './xml-gradients.service';
import { XmlGradientsController } from './xml-gradients.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {XmlGradient} from "./xml-gradient.entity";

@Module({
  imports: [TypeOrmModule.forFeature([XmlGradient])],
  providers: [XmlGradientsService],
  controllers: [XmlGradientsController]
})
export class XmlGradientsModule {}
