import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EEvent, EventDocument } from './schemas/event.schema';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(EEvent.name) private eventModel: Model<EventDocument>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<EEvent> {
    const newEvent = new this.eventModel(createEventDto);
    return newEvent.save();
  }

  async findAll(): Promise<EEvent[]> {
    return await this.eventModel.find();
  }

  async findByUserId(id: ObjectId): Promise<EEvent> {
    return await this.eventModel.findOne({ party: [id] });
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    await this.eventModel.findByIdAndUpdate(id, updateEventDto);
  }

  async remove(id: string) {
    await this.eventModel.findByIdAndRemove(id);
  }
}
