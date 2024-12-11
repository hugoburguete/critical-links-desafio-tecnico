import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { IsClassIdValidator } from './validation/IsClassIdValidator';
import { getModelToken } from '@nestjs/mongoose';
import { Student } from './entities/student.entity';
import { Model } from 'mongoose';
import { SchoolClass } from '../school-class/entities/school-class.entity';

describe('StudentController', () => {
  let controller: StudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [
        {
          provide: getModelToken(Student.name),
          useValue: Model,
        },
        {
          provide: getModelToken(SchoolClass.name),
          useValue: Model,
        },
        StudentService,
        IsClassIdValidator,
      ],
    }).compile();

    controller = module.get<StudentController>(StudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
