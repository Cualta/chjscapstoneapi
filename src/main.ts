import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port: any = process.env.APP_PORT || 8409;
  await app.listen(3000);
}
bootstrap();
