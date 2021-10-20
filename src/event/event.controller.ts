import { Controller, Post, Get, Body } from '@nestjs/common';
import { EventPayload, EventService } from './event.service';
import { CreateEventDAO, Event } from './event.model';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() params: CreateEventDAO): Promise<Event> {
    return await this.eventService.createEvent(params);
  }

  @Get()
  read(): Promise<Event[]> {
    return this.eventService.getAllEvents();
  }
}
