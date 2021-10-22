import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CommandModule,
    EventModule,
    MongooseModule.forRoot(process.env.MONGODB_URL)
  ],
})
export class AppModule {}
