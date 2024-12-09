import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { SchoolClass } from 'src/school-class/entities/school-class.entity';

@Schema({
  versionKey: false,
})
export class Student {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;

  @Prop({
    type: mongoose.Schema.Types.Number,
  })
  studentNum: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'SchoolClass' })
  class: SchoolClass;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
