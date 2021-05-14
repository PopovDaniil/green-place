import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { ObjectId, Document } from 'mongoose';

export type EventDocument = EEvent & Document;

@Schema()
export class EEvent {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true, default: [] })
  party: ObjectId[];

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;
}

export const EventSchema = SchemaFactory.createForClass(EEvent);
