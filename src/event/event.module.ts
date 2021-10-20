import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';
import { EventCommand } from './event.command';
import { EventController } from './event.controller';
import { EventSchema } from './event.model';
import { EventService } from './event.service';

@Module({
    imports: [
      CommandModule,
      MongooseModule.forFeature([{ name: 'Event', schema: EventSchema }]),
    ],
    controllers: [EventController],
    providers: [EventService, EventCommand],
  })
export class EventModule {}
