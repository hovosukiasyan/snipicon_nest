import { Module } from '@nestjs/common';
import { MinimisedIconsService } from './minimised-icons.service';
import { MinimisedIconsController } from './minimised-icons.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {MinimisedIcon} from "./minimised-icon.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MinimisedIcon])],
  providers: [MinimisedIconsService],
  controllers: [MinimisedIconsController]
})
export class MinimisedIconsModule {}
