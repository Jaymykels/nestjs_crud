import { Controller, Post, Body } from '@nestjs/common';
import { EventPayload, EventService } from './event.service';
import { Event } from './event.model';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async store(@Body() params: EventPayload): Promise<Event> {
    return await this.eventService.createEvent(params);
  }
}
