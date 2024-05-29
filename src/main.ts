import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/* import { CorsOptions } from 'apollo-server-express'; */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3001);
}
bootstrap();
