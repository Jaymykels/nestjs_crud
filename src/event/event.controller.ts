import { Controller, Post, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventPayload, EventService } from './event.service';
import { CreateEventDAO, Event, UpdateEventDAO } from './event.model';

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() params: UpdateEventDAO): Promise<Event> {
    return this.eventService.updateEvent(id, {...params})
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Event> {
    return this.eventService.deleteEvent(id)
  }
}
