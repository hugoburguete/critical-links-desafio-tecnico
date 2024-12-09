import { Module } from '@nestjs/common';
import { SchoolClassService } from './school-class.service';
import { SchoolClassController } from './school-class.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SchoolClass, SchoolClassSchema } from './entities/school-class.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SchoolClass.name, schema: SchoolClassSchema },
    ]),
  ],
  controllers: [SchoolClassController],
  providers: [SchoolClassService],
})
export class SchoolClassModule {}
