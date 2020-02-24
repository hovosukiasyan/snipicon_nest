import { Test, TestingModule } from '@nestjs/testing';
import { StandartisedIconsService } from './standartised-icons.service';

describe('StandartisedIconsService', () => {
  let service: StandartisedIconsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StandartisedIconsService],
    }).compile();

    service = module.get<StandartisedIconsService>(StandartisedIconsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
