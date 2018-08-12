import { IsISO8601, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBookDto {
  // @IsString()
  readonly title: string;
  // @IsString()
  readonly author: string;
  @IsOptional()
  readonly genres: string; // TODO: update validation to a list of possible genres.
  @IsISO8601({ message: 'The publish date must be a date in the form of YYYY-MM-DD' }) // ISO1806 Date standard... it's a standard for a reason.
  @IsOptional()
  readonly publishdate: Date;
  @IsString()
  @IsOptional() // Temporarily optional
  readonly isbn10: string;
  @IsString()
  @IsOptional() // Temporarily optional
  readonly isbn13: string;
  // x-www-form-urlencoded always returns strings - Ensures it is transformed and validates properly
  @Transform(value => Number.isNaN(+value) ? 0 : +value)
  // @IsInt()
  // @Min(1)
  readonly pagecount: number;
  // x-www-form-urlencoded always returns strings - Ensures it is transformed and validates properly
  @Transform(value => Number.isNaN(+value) ? 0 : +value)
  // @IsNumber()
  // @Min(1)
 //  @Max(10)
  readonly rating: number;
  readonly status: string;
}