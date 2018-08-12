import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';
import { Mongoose } from 'mongoose';

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
  // @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe({transform: true}))
  async create(@Body() createBookDto: CreateBookDto)
  {
    Logger.log('Create Book called');
    return this.booksService.create(createBookDto);
  }

  // Update
  @Put('/:id')
  // @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe({transform: true, skipMissingProperties: true }))
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto){
    return await this.booksService.update(id, updateBookDto);
  }

  // Delete
  @Delete('/:id')
  // @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: string)
  {
    return await this.booksService.delete(id);
  }
}
