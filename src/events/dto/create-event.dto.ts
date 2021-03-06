import { ObjectId } from 'mongoose';
export class CreateEventDto {
  name: string;
  description: string;
  date: Date;
  party: ObjectId[];
  latitude: number;
  longitude: number;
}
