import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Model } from 'mongoose';
import { SchoolClass } from '../../school-class/entities/school-class.entity';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsClassIdValidator implements ValidatorConstraintInterface {
  constructor(
    @InjectModel(SchoolClass.name) private schoolClassModel: Model<SchoolClass>,
  ) {}
  async validate(value: any): Promise<boolean> {
    try {
      const result = await this.schoolClassModel.find({ _id: value }).exec();
      return !!result.length;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  defaultMessage(args?: ValidationArguments): string {
    return `${args.property} field must be a valid class`;
  }
}

export const IsClassId =
  (options?: ValidationOptions) => (object: object, propertyName: string) =>
    registerDecorator({
      name: `IsClassId`,
      target: object.constructor,
      propertyName,
      options,
      validator: IsClassIdValidator,
    });
