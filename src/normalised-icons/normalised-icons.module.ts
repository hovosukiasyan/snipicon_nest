import { Module } from '@nestjs/common';
import { NormalisedIconsService } from './normalised-icons.service';
import { NormalisedIconsController } from './normalised-icons.controller';

@Module({
  providers: [NormalisedIconsService],
  controllers: [NormalisedIconsController]
})
export class NormalisedIconsModule {}
