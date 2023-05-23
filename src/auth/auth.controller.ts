import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterDTO } from './dtos/register.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  hello(@Body() registerDto: RegisterDTO) {
    return 'hello';
  }
}
