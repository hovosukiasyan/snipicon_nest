import { Test, TestingModule } from '@nestjs/testing';
import { DesignerCollectionController } from './designer-collection.controller';

describe('DesignerCollection Controller', () => {
  let controller: DesignerCollectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesignerCollectionController],
    }).compile();

    controller = module.get<DesignerCollectionController>(DesignerCollectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
