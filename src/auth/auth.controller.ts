import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() userDto: UserDto) {
    try {
      await this.authService.checkUser(userDto);
      return await this.authService.createToken(userDto);
    } catch (err) {
      throw new HttpException(err.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  @Post('register')
  async create(@Body() userDto: UserDto) {
    try {
      await this.authService.createAccount(userDto);
      return await this.authService.createToken(userDto);
    } catch (err) {
      throw new HttpException(err.toString(), HttpStatus.BAD_REQUEST);
    }
  }
}