import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { SchoolClassModule } from './school-class/school-class.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING, {
      dbName: process.env.MONGO_INITDB_DATABASE,
    }),
    StudentModule,
    SchoolClassModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
