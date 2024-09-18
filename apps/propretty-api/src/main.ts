import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UnifiedResponseInterceptor } from './unified-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new UnifiedResponseInterceptor());

  await app.listen(3002);
}
bootstrap();
