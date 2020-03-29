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
    required: 'Score required'
  },
  name: {
    type: String,
    required: true
  }
})

export default UserSchema;