import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'classes',
  versionKey: false,
})
export class SchoolClass {
  @Prop()
  name: string;

  @Prop()
  year: number;
}

export const SchoolClassSchema = SchemaFactory.createForClass(SchoolClass);
