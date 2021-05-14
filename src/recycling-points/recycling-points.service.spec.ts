import { Test, TestingModule } from '@nestjs/testing';
import { RecyclingPointsService } from './recycling-points.service';

describe('RecyclingPointsService', () => {
  let service: RecyclingPointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecyclingPointsService],
    }).compile();

    service = module.get<RecyclingPointsService>(RecyclingPointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
