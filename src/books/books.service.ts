import { Model } from 'mongoose';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BookModelToken') private readonly bookModel: Model<Book>) { }

  // GET: Index
  async findAll(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }
  // GET: Show
    async show(id: string) {
      const book = await this.bookModel.findById(id);
      if (book == null)
       {
         throw new HttpException('404 Not Found: Book does not exist.', HttpStatus.NOT_FOUND);
       }
      return book;
    }
  // POST: Create
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return await createdBook.save();
  }

  // PUT: Update
  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    await this.bookModel.update({_id: id}, updateBookDto, {upsert: false});
    const book = await this.bookModel.findById(id);
    if (book == null)
    {
      throw new HttpException('400 Bad Request: Please reload the page.', HttpStatus.BAD_REQUEST);
    }
    return book;
  }

  // DELETE: Delete
  async delete(id: string)
  {
    const book = await this.bookModel.findByIdAndRemove(id);
    if (book == null)
    {
      throw new HttpException('400 Bad Request: Please reload the page.', HttpStatus.BAD_REQUEST);
    }
    return book;
  }
}