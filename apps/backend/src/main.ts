import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getCorsConfig } from './configs/cors.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsConfigs = getCorsConfig();
  app.enableCors(corsConfigs);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();
