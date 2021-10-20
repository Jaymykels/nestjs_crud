import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './event.model';

export interface EventPayload {
  name: string;
  date: Date;
  location: string;
  expectedWeather: string;
}
@Injectable()
export class EventService {
  constructor(@InjectModel('Event') private readonly eventModel: Model<Event>) {}

  async getEvent(id: string): Promise<Event> {
    let event;
    try {
      event = await this.eventModel.findOne({ _id: id });
    } catch (error) {
      throw new NotFoundException('Could not find event');
    }
    return event;
  }

  async createEvent(event: EventPayload): Promise<Event> {
    let result;
    try {
      result = await this.eventModel.create(event);
    } catch (error) {
      throw new NotImplementedException(error);
    }
    return result;
  }
}
