import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// O arquivo de entrada do aplicativo que usa a função principal.

async function bootstrap() {
  // NestFactory para criar uma instância do aplicativo Nest.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
