import mongoose from 'mongoose'
import userSchema from '../models/userModel.js'

const User = mongoose.model('User', userSchema);

export const addUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save((error, user) => {
    if (error) {
      res.json(error);
    }
    res.json(user);
  });
}

export const getUsers = (req, res) => {
  User.find({}, (error, users) => {
    if (error) {
      res.json(error);
    }
    res.json(users);
  });
}