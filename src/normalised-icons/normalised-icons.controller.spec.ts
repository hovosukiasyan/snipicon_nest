import { Test, TestingModule } from '@nestjs/testing';
import { NormalisedIconsController } from './normalised-icons.controller';

describe('NormalisedIcons Controller', () => {
  let controller: NormalisedIconsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NormalisedIconsController],
    }).compile();

    controller = module.get<NormalisedIconsController>(NormalisedIconsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
