import { IsNumber, IsPositive, IsString, Max } from 'class-validator';

export class CreateSchoolClassDto {
  @IsString()
  name: string;

  @IsNumber({
    maxDecimalPlaces: 0,
  })
  @IsPositive()
  @Max(99)
  year: number;
}
