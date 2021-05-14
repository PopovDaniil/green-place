import { Test, TestingModule } from '@nestjs/testing';
import { RecyclingPointsController } from './recycling-points.controller';
import { RecyclingPointsService } from './recycling-points.service';

describe('RecyclingPointsController', () => {
  let controller: RecyclingPointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecyclingPointsController],
      providers: [RecyclingPointsService],
    }).compile();

    controller = module.get<RecyclingPointsController>(RecyclingPointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
