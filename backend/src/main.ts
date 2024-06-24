import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import {WsAdapter} from "@nestjs/platform-ws";
import {ConfigService} from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const envService = app.get(ConfigService)
  const frontendUrl = envService.get("FRONTEND_URL")

  app.use(cookieParser());
  app.enableCors({
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    origin: frontendUrl,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
  app.useWebSocketAdapter(new WsAdapter(app))
  await app.listen(3000, "0.0.0.0");
}
bootstrap();
