import { IsISO8601, IsNumber, IsNumberString, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
   title: string;
  @IsOptional()
  @IsString()
   author: string;
  @IsOptional()
  genres: string[3];
  @IsOptional()
  @IsISO8601()
   publishdate: Date;
  @IsString()
  @IsOptional() // Temporarily optional
   isbn10: string;
  @IsString()
  @IsOptional() // Temporarily optional
   isbn13: string;
  @IsNumberString()
  @IsOptional()
   pagecount: number;
  @IsNumber()
  @IsOptional()
   rating: number;

  // constructor(updateBookDto: UpdateBookDto) {
  //   this.title = updateBookDto.title;
  //   this.author = updateBookDto.author;
  //   this.genres = updateBookDto.genres;
  //   this.publishdate = updateBookDto.publishdate;
  //   this.isbn10 = updateBookDto.isbn10;
  //   this.isbn13 =  updateBookDto.isbn13;
  //   this.pagecount = updateBookDto.pagecount;
  //   this.rating = updateBookDto.rating;
  // }
}