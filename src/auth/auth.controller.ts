import { secret } from './../app.secret';
import { LoginUserDto, LoginUserResponse } from './dto/login-user.dto';
import { Body, Controller, Headers, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { sign } from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: RegisterUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<LoginUserResponse> {
    const user = await this.authService.find(loginUserDto);
    if (user) {
      const token = sign({ _id: user.id }, secret, { expiresIn: '90d' });
      await this.authService.setToken(loginUserDto, token);
      return {
        token,
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  }

  @Post('logout')
  async logout(@Headers('Auth-Token') token: string) {
    await this.authService.deleteToken(token);
  }
}
