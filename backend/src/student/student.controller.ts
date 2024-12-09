import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { DeleteResult } from 'mongoose';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    const result = await this.studentService.create(createStudentDto);

    return {
      id: result._id,
    };
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    const result = await this.studentService.update(id, updateStudentDto);

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
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    return await this.studentService.remove(id);
  }
}
