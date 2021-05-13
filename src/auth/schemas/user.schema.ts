import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  telephone: number;

  @Prop({ required: true, unique: true })
  login: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
