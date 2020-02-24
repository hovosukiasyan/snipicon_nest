import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat';
import { ApiSecurity } from '@nestjs/swagger';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Cats')
@ApiSecurity('bearer')
@Controller('cats')
export class CatsController {
  constructor(private srv: CatsService) {}

  @Get()
  getCats() {
    return this.srv.getCats();
  }

  @Post()
  createCat(@Body() cat: Cat) {
    this.srv.createCat(cat);
  }
}
