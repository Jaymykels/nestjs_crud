import * as mongoose from 'mongoose';

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
