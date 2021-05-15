import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Post.name)
    private pointModel: Model<PostDocument>,
  ) {}

  async create(createPointDto: CreatePostDto) {
    const newPoint = new this.pointModel(createPointDto);
    return newPoint.save();
  }

  async findAll() {
    return await this.pointModel.find();
  }

  async findById(id: string) {
    return await this.pointModel.findById(id);
  }

  async findByTopic(topic: string) {
    return await this.pointModel.find({ topic });
  }

  async update(id: string, updatePointDto: UpdatePostDto) {
    await this.pointModel.findByIdAndUpdate(id, updatePointDto);
  }

  async remove(id: string) {
    await this.pointModel.findByIdAndRemove(id);
  }
}
