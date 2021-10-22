import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { Event } from './event.model';

export interface EventPayload {
  name: string;
  date: string;
  location: string;
  expectedWeather: string;
}

export interface UpdateEventPayload {
  name?: string;
  date?: string;
  location?: string;
  expectedWeather?: string;
}
@Injectable()
export class EventService {
  constructor(@InjectModel('Event') private readonly eventModel: Model<Event>) {}

  async getAllEvents(): Promise<Event[]> {
    return this.eventModel.find({});
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

  async updateEvent(eventId: string, event: UpdateEventPayload):  Promise<Event> {
    try {
      return await this.eventModel.findByIdAndUpdate(eventId, event, { new: true})
    } catch (error) {
      throw new NotImplementedException(error);
    }
  }

  async deleteEvent(eventId: string): Promise<Event> {
    try {
      return await this.eventModel.findByIdAndDelete(eventId)
    } catch (error) {
      throw new NotImplementedException(error);
    }
  }
}
