import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecyclingPointDocument = RecyclingPoint & Document;

@Schema()
export class RecyclingPoint {
  @Prop()
  name: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ required: true })
  accepts: string[];
}

export const RecyclingPointSchema =
  SchemaFactory.createForClass(RecyclingPoint);
