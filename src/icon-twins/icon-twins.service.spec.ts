import { Test, TestingModule } from '@nestjs/testing';
import { IconTwinsService } from './icon-twins.service';

describe('IconTwinsService', () => {
  let service: IconTwinsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IconTwinsService],
    }).compile();

    service = module.get<IconTwinsService>(IconTwinsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
