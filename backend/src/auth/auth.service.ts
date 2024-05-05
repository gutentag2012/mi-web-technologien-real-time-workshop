import {Injectable, UnauthorizedException} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService, private readonly jwtService: JwtService) {
  }

  async loginAdmin(username: string, password: string) {
    const adminUsername = this.configService.get('ADMIN_USER');
    const adminPassword = this.configService.get('ADMIN_PASSWORD');
    if(username !== adminUsername || password !== adminPassword) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const token = await this.jwtService.signAsync({username: adminUsername}, {
      secret: this.configService.get('JWT_SECRET'),
    });
    return {token};
  }
}
