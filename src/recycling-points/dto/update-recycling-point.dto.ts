import { PartialType } from '@nestjs/mapped-types';
import { CreateRecyclingPointDto } from './create-recycling-point.dto';

export class UpdateRecyclingPointDto extends PartialType(CreateRecyclingPointDto) {}
