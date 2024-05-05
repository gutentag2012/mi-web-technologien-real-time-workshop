import {Body, Controller, Post, Res} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('login')
  public loginAdmin(@Body() credentials: { username: string, password: string }){
    return this.authService.loginAdmin(credentials.username, credentials.password);
  }
}
