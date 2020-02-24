import { Module } from '@nestjs/common';
import { IconTwinsService } from './icon-twins.service';
import { IconTwinsController } from './icon-twins.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {IconTwin} from "./icon-twin.entity";

@Module({
  imports: [TypeOrmModule.forFeature([IconTwin])],
  providers: [IconTwinsService],
  controllers: [IconTwinsController]
})
export class IconTwinsModule {}
