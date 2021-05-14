import {
  RecyclingPoint,
  RecyclingPointSchema,
} from './schemas/recycling-point.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { RecyclingPointsService } from './recycling-points.service';
import { RecyclingPointsController } from './recycling-points.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RecyclingPoint.name, schema: RecyclingPointSchema },
    ]),
  ],
  controllers: [RecyclingPointsController],
  providers: [RecyclingPointsService],
})
export class RecyclingPointsModule {}
