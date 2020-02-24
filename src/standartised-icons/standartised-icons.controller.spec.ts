import { Test, TestingModule } from '@nestjs/testing';
import { StandartisedIconsController } from './standartised-icons.controller';

describe('StandartisedIcons Controller', () => {
  let controller: StandartisedIconsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StandartisedIconsController],
    }).compile();

    controller = module.get<StandartisedIconsController>(StandartisedIconsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
