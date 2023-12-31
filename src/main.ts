import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Ip } from '@nestjs/common';
import { AppController } from './app.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform:true,
      transformOptions:{
        enableImplicitConversion:true
      }
    }),
  );

 

  await app.listen(process.env.PORT);

  

  console.log(`server on port ${process.env.PORT}`);
  
}
bootstrap();
