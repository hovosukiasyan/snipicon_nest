import { Test, TestingModule } from '@nestjs/testing';
import { NormalisedIconsService } from './normalised-icons.service';

describe('NormalisedIconsService', () => {
  let service: NormalisedIconsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NormalisedIconsService],
    }).compile();

    service = module.get<NormalisedIconsService>(NormalisedIconsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
