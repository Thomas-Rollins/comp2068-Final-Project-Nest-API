import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { IUser } from '../users/interfaces/user.interface';
import { UserDto } from '../users/dto/user.dto';
import { UserSchema } from '../users/users.schema';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserModelToken') private readonly userModel: Model<IUser>,
  ) {
  }

  public async createToken(userDto: UserDto) {
    const expiresIn = 60 * 60,
      secretOrKey = 'secret';
    const user = { email: userDto.email };
    const token = jwt.sign(user, secretOrKey, { expiresIn });
    Logger.log('Token created');
    return {
      expires_in: expiresIn,
      access_token: token,
    };
  }

  public async checkUser(userDto: UserDto) {
    const user: UserDto = await this.userModel.findOne({
      email: userDto.email,
    });
    if (user) {
      const compare = UserSchema.methods.comparePassword(userDto.password, user.password);
      if (!compare.toString()) {
        throw new Error('Invalid credential');
      }
    } else {
      throw new Error('Invalid credential');
    }
  }

  public async createAccount(userDto: UserDto): Promise<any> {
    try {
      const createdUser = new this.userModel(userDto);
      await createdUser.save();
    } catch (err) {
      const customError =
        err.code === '11000' ? 'User already exist' : 'Error creating User';
      throw new Error(customError);
    }
  }

  public async validateUser(signedUser): Promise<boolean> {
    try {
      const user = await this.userModel.findOne({ email: signedUser.email });
      return user ? true : false;
    } catch (err) {
      return false;
    }
  }
}