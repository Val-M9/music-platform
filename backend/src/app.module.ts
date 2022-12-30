import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DATABASE), TrackModule],
})
export class AppModule {}
