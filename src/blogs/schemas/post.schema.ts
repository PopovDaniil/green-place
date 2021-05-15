import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true })
  heading: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  article: string;

  @Prop({ required: true })
  topic: string;

  @Prop()
  author: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
