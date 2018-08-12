import { IsISO8601, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
   title: string;
  @IsOptional()
  @IsString()
   author: string;
  @IsOptional() // TODO: update validation to a list of possible genres.
  genres: string;
  @IsOptional()
  @IsISO8601()
   publishdate: Date;
  @IsString()
  @IsOptional() // Temporarily optional
   isbn10: string;
  @IsString()
  @IsOptional() // Temporarily optional
   isbn13: string;
  @IsNumber()
  @IsOptional()
   pagecount: number;
  @IsNumber()
  @IsOptional()
   rating: number;

}