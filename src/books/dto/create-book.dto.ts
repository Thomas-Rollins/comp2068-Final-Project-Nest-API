import { IsInt, IsISBN, IsISO8601, IsNumber, IsOptional, IsString, Max, Min, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBookDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly author: string;
  @MinLength(3, { each: true })
  readonly genres: string[3]; // TODO: update validation to a list of possible genres.
  @IsISO8601({ message: 'The publish date must be a date in the form of YYYY-MM-DD' }) // ISO1806 Date standard... it's a standard for a reason.
  @IsOptional()
  readonly publishdate: Date;
  @IsString()
  @IsOptional() // Temporarily optional
  @IsISBN('10')
  readonly isbn10: string;
  @IsString()
  @IsOptional() // Temporarily optional
  @IsISBN('13')
  readonly isbn13: string;
  // x-www-form-urlencoded always returns strings - Ensures it is transformed and validates properly
  @Transform(value => Number.isNaN(+value) ? 0 : +value)
  @IsInt()
  @Min(1)
  readonly pagecount: number;
  // x-www-form-urlencoded always returns strings - Ensures it is transformed and validates properly
  @Transform(value => Number.isNaN(+value) ? 0 : +value)
  @IsNumber()
  @Min(1)
  @Max(10)
  readonly rating: number;
}