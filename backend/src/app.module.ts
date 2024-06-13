import {Module} from '@nestjs/common';
import {VotingModule} from './voting/voting.module';
import {EventEmitterModule} from '@nestjs/event-emitter';
import {AuthModule} from './auth/auth.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtModule} from "@nestjs/jwt";
import { SlideControlModule } from './slide-control/slide-control.module';
import { SseModule } from './sse/sse.module';
import { WebsocketsModule } from './websockets/websockets.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {expiresIn: '3h'},
      }),
      global: true
    }),
    EventEmitterModule.forRoot({global: true}),
    VotingModule,
    AuthModule,
    SlideControlModule,
    SseModule,
    WebsocketsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
