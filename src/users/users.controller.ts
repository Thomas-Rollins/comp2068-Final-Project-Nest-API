import { UsersService } from './users.service';
import { Mongoose } from 'mongoose';
import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';

@Controller('Users')
export class UsersController {
  constructor(private readonly userService: UsersService) {
  }

  // Index
  @Get()
  async findAll(): Promise<IUser[]> {
    Logger.log('findAll UserService Called.');
    return this.userService.findAll();
  }

  @Get('/:id')
  async findOneByEmail(@Param('id') id: string) {
    Logger.log(JSON.stringify('findByID() Book called with email: ' + id));
    return await this.userService.findOneByEmail(id);
  }

  // Create
  @Post()
  // @UsePipes(new ValidationPipe({transform: true}))
  async create(@Body() userDto: UserDto) {
    Logger.log(userDto.password);
    return this.userService.create(userDto);
  }

  // Update
  @Put('/:id')
  @UsePipes(new ValidationPipe({ transform: true, skipMissingProperties: true }))
  async update(@Param('id') id: string, @Body() userDto: UserDto) {
    Logger.log('UpdateUser UserService Called on id: ' + id);
    Logger.log(JSON.stringify(userDto));
    return await this.userService.update(id, userDto);
  }

  // Delete
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}