import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  githubHandle: {
    type: String,
    required: 'GitHub handle required',
    unique: true
  },
  score: {
    type: Number,
    required: 'Score required',
    default: 0
  }
})

export default UserSchema;