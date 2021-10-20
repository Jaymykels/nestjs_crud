import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { EventService } from './event.service';

@Injectable()
export class EventCommand {
  constructor(private readonly eventService: EventService) {}

  @Command({ command: 'seed:event', describe: 'create dummy events in database' })
  async create() {
    console.log('seeding data');
    const event = await this.eventService.createEvent({
      name: "New Event",
      location: "Lagos",
      date: new Date(),
      expectedWeather: "Clear"
    });
    console.log(event);
  }
}
