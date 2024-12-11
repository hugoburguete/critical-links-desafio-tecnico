import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { SchoolClass } from './entities/school-class.entity';
import { SchoolClassController } from './school-class.controller';
import { SchoolClassService } from './school-class.service';

describe('SchoolClassController', () => {
  let controller: SchoolClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolClassController],
      providers: [
        SchoolClassService,
        {
          provide: getModelToken(SchoolClass.name),
          useValue: Model,
        },
      ],
    }).compile();

    controller = module.get<SchoolClassController>(SchoolClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
