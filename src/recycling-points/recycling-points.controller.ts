import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecyclingPointsService } from './recycling-points.service';
import { CreateRecyclingPointDto } from './dto/create-recycling-point.dto';
import { UpdateRecyclingPointDto } from './dto/update-recycling-point.dto';

@Controller('recycling-points')
export class RecyclingPointsController {
  constructor(
    private readonly recyclingPointsService: RecyclingPointsService,
  ) {}

  @Post()
  create(@Body() createRecyclingPointDto: CreateRecyclingPointDto) {
    return this.recyclingPointsService.create(createRecyclingPointDto);
  }

  @Get()
  findAll() {
    return this.recyclingPointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recyclingPointsService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecyclingPointDto: UpdateRecyclingPointDto,
  ) {
    return this.recyclingPointsService.update(id, updateRecyclingPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recyclingPointsService.remove(id);
  }
}
