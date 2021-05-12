import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(registerUserDto: RegisterUserDto): Promise<UserDocument> {
    const newUser = new this.userModel(registerUserDto);
    return await newUser.save();
  }

  async find(loginUserDto: LoginUserDto): Promise<UserDocument> {
    return await this.userModel.findOne(loginUserDto);
  }

  setToken(loginUserDto: LoginUserDto, token: string) {
    return this.userModel.findOneAndUpdate(loginUserDto, { token });
  }

  deleteToken(token: string) {
    return this.userModel.findOneAndUpdate({ token }, { token: null });
  }
}
