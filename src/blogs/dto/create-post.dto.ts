import { ObjectId } from 'mongoose';
export class CreatePostDto {
  heading: string;
  description: string;
  article: string;
  topic: string;
  author: ObjectId;
}
