import { Module } from '@nestjs/common';
import { NormalisedIconsService } from './normalised-icons.service';
import { NormalisedIconsController } from './normalised-icons.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {NormalisedIcon} from "./normalised-icon.entity";


@Module({
  imports: [TypeOrmModule.forFeature([NormalisedIcon])],
  providers: [NormalisedIconsService],
  controllers: [NormalisedIconsController]
})
export class NormalisedIconsModule {}
