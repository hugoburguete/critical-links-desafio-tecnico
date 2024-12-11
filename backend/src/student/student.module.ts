import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student, StudentSchema } from './entities/student.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { IsClassIdValidator } from './validation/IsClassIdValidator';
import {
  SchoolClass,
  SchoolClassSchema,
} from 'src/school-class/entities/school-class.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema },
      { name: SchoolClass.name, schema: SchoolClassSchema },
    ]),
  ],
  controllers: [StudentController],
  providers: [StudentService, IsClassIdValidator],
})
export class StudentModule {}
