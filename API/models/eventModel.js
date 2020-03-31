import mongoose from 'mongoose'

const Schema = mongoose.Schema

const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String
  }
});

export default EventSchema;