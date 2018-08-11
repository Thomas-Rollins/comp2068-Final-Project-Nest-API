import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  readonly role: string;
}