import { Test, TestingModule } from '@nestjs/testing';
import { MinimisedIconsService } from './minimised-icons.service';

describe('MinimisedIconsService', () => {
  let service: MinimisedIconsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinimisedIconsService],
    }).compile();

    service = module.get<MinimisedIconsService>(MinimisedIconsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
