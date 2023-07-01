import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly titile: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true })
  readonly generes: string[];
}
