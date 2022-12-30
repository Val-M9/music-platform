import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const port = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(port, () => {
      console.log(`Started on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
