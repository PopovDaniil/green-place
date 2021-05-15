import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateParkDto } from './dto/create-park.dto';
import { UpdateParkDto } from './dto/update-park.dto';
import { Park, ParkDocument } from './schemas/park.schema';

@Injectable()
export class ParksService {
  constructor(@InjectModel(Park.name) private parkModel: Model<ParkDocument>) {}

  async create(createParkDto: CreateParkDto): Promise<Park> {
    const newEvent = new this.parkModel(createParkDto);
    return newEvent.save();
  }

  async findAll(): Promise<Park[]> {
    return await this.parkModel.find();
  }

  async findById(id: ObjectId): Promise<Park> {
    return await this.parkModel.findById(id);
  }

  async update(id: string, updateParkDto: UpdateParkDto) {
    await this.parkModel.findByIdAndUpdate(id, updateParkDto);
  }

  async remove(id: string) {
    await this.parkModel.findByIdAndRemove(id);
  }
}
