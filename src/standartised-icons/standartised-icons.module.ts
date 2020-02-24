import { Module } from '@nestjs/common';
import { StandartisedIconsService } from './standartised-icons.service';
import { StandartisedIconsController } from './standartised-icons.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {StandartisedIcon} from "./standartised-icon.entity";

@Module({
  imports: [TypeOrmModule.forFeature([StandartisedIcon])],
  providers: [StandartisedIconsService],
  controllers: [StandartisedIconsController]
})
export class StandartisedIconsModule {}
