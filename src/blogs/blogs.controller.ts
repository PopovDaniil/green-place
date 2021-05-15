import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.blogsService.create(createPostDto);
  }

  @Get()
  find(@Query('topic') topic: string) {
    if (topic) {
      return this.blogsService.findByTopic(topic);
    } else {
      return this.blogsService.findAll();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogsService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.blogsService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogsService.remove(id);
  }
}
