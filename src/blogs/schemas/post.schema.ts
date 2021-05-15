import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

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

  @Prop({ type: 'ObjectId' })
  author: ObjectId;
}

export const PostSchema = SchemaFactory.createForClass(Post);
