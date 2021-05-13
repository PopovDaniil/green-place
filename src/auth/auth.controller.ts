import { secret } from './../app.secret';
import { LoginUserDto, LoginUserResponse } from './dto/login-user.dto';
import {
  Body,
  ConflictException,
  Controller,
  Headers,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto, RegisterUserResponse } from './dto/register-user.dto';
import { sign } from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() createUserDto: RegisterUserDto,
  ): Promise<RegisterUserResponse> {
    try {
      const user = await this.authService.create(createUserDto);
      const token = sign({ _id: user.id }, secret, { expiresIn: '90d' });
      await this.authService.setToken(
        { login: user.login, password: user.password },
        token,
      );
      return {
        token,
        login: user.login,
        email: user.email,
        telephone: user.telephone,
      };
    } catch (e) {
      if (e.code == 11000) {
        throw new ConflictException('Email, phone or login is already used');
      } else {
        return e;
      }
    }
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<LoginUserResponse> {
    const user = await this.authService.find(loginUserDto);
    if (user) {
      const token = sign({ _id: user.id }, secret, { expiresIn: '90d' });
      await this.authService.setToken(loginUserDto, token);
      return {
        token,
      };
    } else {
      throw new UnauthorizedException('Incorrect login or password');
    }
  }

  @Post('logout')
  async logout(@Headers('Auth-Token') token: string) {
    await this.authService.deleteToken(token);
  }
}
