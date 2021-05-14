import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecyclingPointDto } from './dto/create-recycling-point.dto';
import { UpdateRecyclingPointDto } from './dto/update-recycling-point.dto';
import {
  RecyclingPoint,
  RecyclingPointDocument,
} from './schemas/recycling-point.schema';

@Injectable()
export class RecyclingPointsService {
  constructor(
    @InjectModel(RecyclingPoint.name)
    private pointModel: Model<RecyclingPointDocument>,
  ) {}

  async create(createPointDto: CreateRecyclingPointDto) {
    const newPoint = new this.pointModel(createPointDto);
    return newPoint.save();
  }

  async findAll() {
    return await this.pointModel.find();
  }

  async findById(id: string) {
    return await this.pointModel.findById(id);
  }

  async update(id: string, updatePointDto: UpdateRecyclingPointDto) {
    await this.pointModel.findByIdAndUpdate(id, updatePointDto);
  }

  async remove(id: string) {
    await this.pointModel.findByIdAndRemove(id);
  }
}
