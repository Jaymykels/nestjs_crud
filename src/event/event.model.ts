import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { JoiSchema, JoiSchemaOptions, CREATE, UPDATE } from 'nestjs-joi';
import * as Joi from 'joi';
export const EventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
  expectedWeather: String,
});

export interface Event extends mongoose.Document {
  _id?: string;
  name: string;
  date: string;
  location: string;
  expectedWeather: string;
}

@JoiSchemaOptions({
  allowUnknown: false,
})

export class CreateEventDAO {
  @JoiSchema(Joi.string().required())
  @JoiSchema([CREATE], Joi.string().required())
  @JoiSchema([UPDATE], Joi.string().optional())
  @ApiProperty({
    description: "The name of the event e.g Michael's Wedding",
    default: ""
  })
  name: string;

  @JoiSchema(Joi.date().required())
  @JoiSchema([CREATE], Joi.date().required())
  @JoiSchema([UPDATE], Joi.date().optional())
  @ApiProperty({
    description: "The date of the event",
    default: new Date()
  })
  date: Date;
  
  @JoiSchema(Joi.string().required())
  @JoiSchema([CREATE], Joi.string().required())
  @JoiSchema([UPDATE], Joi.string().optional())
  @ApiProperty({
    description: "The event a location e.g Pistis Center off Lekki Epe Expressway.",
    default: ""
  })
  location: string;

  @JoiSchema(Joi.string().required())
  @JoiSchema([CREATE], Joi.string().required())
  @JoiSchema([UPDATE], Joi.string().optional())
  @ApiProperty({
    description: "The weather forcast for the selected date and location",
    enum: ['Clear', 'Rainny', 'Sunny', 'Windy']
  })
  expectedWeather: string;
}