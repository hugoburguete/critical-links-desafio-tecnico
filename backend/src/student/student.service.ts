import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './entities/student.entity';
import { DeleteResult, Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
  ) {}

  public async create(createStudentDto: CreateStudentDto) {
    return await this.studentModel.create(createStudentDto);
  }

  public async findAll() {
    return await this.studentModel.find().exec();
  }

  public async findOne(id: string) {
    return await this.studentModel
      .find({
        _id: id,
      })
      .exec();
  }

  public async update(id: string, updateStudentDto: UpdateStudentDto) {
    return await this.studentModel
      .updateOne({ _id: id }, updateStudentDto)
      .exec();
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.studentModel.deleteOne({ _id: id }).exec();
  }
}
