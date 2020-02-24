import { Test, TestingModule } from '@nestjs/testing';
import { IconTwinsController } from './icon-twins.controller';

describe('IconTwins Controller', () => {
  let controller: IconTwinsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IconTwinsController],
    }).compile();

    controller = module.get<IconTwinsController>(IconTwinsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
