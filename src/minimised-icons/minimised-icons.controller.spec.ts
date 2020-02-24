import { Test, TestingModule } from '@nestjs/testing';
import { MinimisedIconsController } from './minimised-icons.controller';

describe('MinimisedIcons Controller', () => {
  let controller: MinimisedIconsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MinimisedIconsController],
    }).compile();

    controller = module.get<MinimisedIconsController>(MinimisedIconsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
