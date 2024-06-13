import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import {WsAdapter} from "@nestjs/platform-ws";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.use(cookieParser());
  app.useWebSocketAdapter(new WsAdapter(app))
  await app.listen(3000, "0.0.0.0");
}
bootstrap();
