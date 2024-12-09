import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SchoolClassService } from './school-class.service';
import { CreateSchoolClassDto } from './dto/create-school-class.dto';
import { UpdateSchoolClassDto } from './dto/update-school-class.dto';
import { DeleteResult } from 'mongoose';

@Controller('school-class')
export class SchoolClassController {
  constructor(private readonly schoolClassService: SchoolClassService) {}

  @Post()
  async create(@Body() createSchoolClassDto: CreateSchoolClassDto) {
    const result = await this.schoolClassService.create(createSchoolClassDto);

    return {
      id: result._id,
    };
  }

  @Get()
  findAll() {
    return this.schoolClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolClassService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSchoolClassDto: UpdateSchoolClassDto,
  ) {
    const result = await this.schoolClassService.update(
      id,
      updateSchoolClassDto,
    );

    if (result.matchedCount > 0) {
      return {
        success: result.acknowledged,
      };
    }

    throw new HttpException(
      {
        success: false,
        message: 'No records were updated',
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.schoolClassService.remove(id);
  }
}
