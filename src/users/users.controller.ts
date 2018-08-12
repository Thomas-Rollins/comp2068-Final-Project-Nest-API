import { UsersService } from './users.service';
import { Mongoose } from 'mongoose';
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';

@Controller('Users')
export class UsersController {
  constructor(private readonly userService: UsersService) {
  }

  // Index
  @Get()
  async findAll(): Promise<IUser[]> {
    return this.userService.findAll();
  }

  @Get('/:id')
  async findOneById(@Param('id') id: string) {
    return await this.userService.findOneById(id);
  }

  // Create
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  // Update
  @Put('/:id')
  @UsePipes(new ValidationPipe({ transform: true, skipMissingProperties: true }))
  async update(@Param('id') id: string, @Body() userDto: UserDto) {
    return await this.userService.update(id, userDto);
  }

  // Delete
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}