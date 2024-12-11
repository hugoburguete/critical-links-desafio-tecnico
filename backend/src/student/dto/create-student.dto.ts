import {
  IsEmail,
  IsMongoId,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { IsClassId } from '../validation/IsClassIdValidator';

export class CreateStudentDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsEmail()
  email: string;

  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(0)
  @Max(999999)
  studentNum: number;

  @IsString()
  @IsMongoId()
  @IsClassId()
  class: string;
}
