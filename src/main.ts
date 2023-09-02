import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });
  app.setGlobalPrefix('api/v1');
  if (
    process.env.SERVER_ENV !== 'production' &&
    process.env.SERVER_ENV !== 'staging'
  ) {
    const docBuilder = new DocumentBuilder()
      .setTitle('San pham minh phu')
      .setDescription('The SPMP API description')
      .addBearerAuth()
      .setVersion(`${process.env.RENDER_GIT_COMMIT ?? 'Unknown build'}`);
    docBuilder.addServer(`http://localhost:3001`, 'Localhost');
    docBuilder.addServer(
      'https://spmp-backend.vercel.app/',
      'Development Instance 1',
    );
    const swaggerConfig = docBuilder.build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('docs', app, document);
  }

  await app.listen(3001);
}
bootstrap();
