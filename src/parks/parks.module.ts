import { Park, ParkSchema } from './schemas/park.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ParksService } from './parks.service';
import { ParksController } from './parks.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Park.name, schema: ParkSchema }]),
  ],
  controllers: [ParksController],
  providers: [ParksService],
})
export class ParksModule {}
