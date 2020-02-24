import { Test, TestingModule } from '@nestjs/testing';
import { DesignerCollectionService } from './designer-collection.service';

describe('DesignerCollectionService', () => {
  let service: DesignerCollectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DesignerCollectionService],
    }).compile();

    service = module.get<DesignerCollectionService>(DesignerCollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
