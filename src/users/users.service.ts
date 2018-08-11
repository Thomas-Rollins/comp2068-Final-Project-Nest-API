import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserModelToken') private readonly userModel: Model<IUser>) {
  }

  // GET: FindAll
  public async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }

  // Get: Show
  async findOneByEmail(id: string) {
    const user = await this.userModel.findById(id);
    if (user == null) {
      throw new HttpException('404 Not Found: User does not exist.', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  // POST: Create
  async create(userDto: UserDto): Promise<IUser> {
    const createdUser = new this.userModel(userDto);
    return await createdUser.save();
  }

  // PUT: Update
  async update(id: string, userDto: UserDto): Promise<IUser> {
    await this.userModel.update({ _id: id }, userDto, { upsert: false });
    const user = await this.userModel.findById(id);
    if (user == null) {
      throw new HttpException('400 Bad Request: Please reload the page.', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  // DELETE: Delete
  async delete(id: string) {
    const user = await this.userModel.findByIdAndRemove(id);
    if (user == null) {
      throw new HttpException('400 Bad Request: Please reload the page.', HttpStatus.BAD_REQUEST);
    }
    return user;
  }
}