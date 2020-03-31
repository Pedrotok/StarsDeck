import mongoose from 'mongoose'
import EventSchema from './eventModel.js';

const Schema = mongoose.Schema

const UserSchema = new Schema({
  githubHandle: {
    type: String,
    required: true,
    unique: true
  },
  score: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    required: true
  },
  profilePictureUrl: {
    type: String,
    required: true
  },
  eventList: {
    type: [EventSchema],
    default: []
  }
})

export default UserSchema;