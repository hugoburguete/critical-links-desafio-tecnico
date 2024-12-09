import { Injectable } from '@nestjs/common';
import { CreateSchoolClassDto } from './dto/create-school-class.dto';
import { UpdateSchoolClassDto } from './dto/update-school-class.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SchoolClass } from './entities/school-class.entity';
import { DeleteResult, Model } from 'mongoose';

@Injectable()
export class SchoolClassService {
  constructor(
    @InjectModel(SchoolClass.name) private schoolClassModel: Model<SchoolClass>,
  ) {}

  public async create(createSchoolClassDto: CreateSchoolClassDto) {
    return await this.schoolClassModel.create(createSchoolClassDto);
  }

  public async findAll(): Promise<SchoolClass[]> {
    return await this.schoolClassModel.find({}).exec();
  }

  public async findOne(id: string): Promise<SchoolClass> {
    return await this.schoolClassModel.findOne({ _id: id }).exec();
  }

  public async update(id: string, updateClassDto: UpdateSchoolClassDto) {
    return await this.schoolClassModel
      .updateOne(
        {
          _id: id,
        },
        updateClassDto,
      )
      .exec();
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.schoolClassModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
