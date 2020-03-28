import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  githubHandle: {
    type: String,
    required: 'GitHub required'
  },
  score: {
    type: Number,
    default: 0
  }
})

export default UserSchema;