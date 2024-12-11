import { Test, TestingModule } from '@nestjs/testing';
import { SchoolClassService } from './school-class.service';
import { getModelToken } from '@nestjs/mongoose';
import { SchoolClass } from './entities/school-class.entity';
import { Model } from 'mongoose';

describe('SchoolClassService', () => {
  let service: SchoolClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SchoolClassService,
        {
          provide: getModelToken(SchoolClass.name),
          useValue: Model,
        },
      ],
    }).compile();

    service = module.get<SchoolClassService>(SchoolClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
