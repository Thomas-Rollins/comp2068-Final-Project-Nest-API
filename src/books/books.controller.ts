import { Controller, Get, Post, Put, Delete, Body, Param, ValidationPipe, UsePipes } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';

@Controller('Books')
export class BooksController
{
  constructor(private readonly booksService: BooksService) {}

  // Index
  @Get()
  async findAll(): Promise<Book[]>
  {
    return this.booksService.findAll();
  }

  @Get('/:id')
  async show(@Param('id') id: string)
  {
    return await this.booksService.show(id);
  }

  // Create
  @Post()
  @UsePipes(new ValidationPipe({transform: true}))
  async create(@Body() createBookDto: CreateBookDto)
  {
    this.booksService.create(createBookDto);
  }

  // Update
  @Put('/:id')
  @UsePipes(new ValidationPipe({transform: true, skipMissingProperties: true }))
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto){
    return await this.booksService.update(id, updateBookDto);
  }

  // Delete
  @Delete('/:id')
  async delete(@Param('id') id: string)
  {
    return await this.booksService.delete(id);
  }
}
