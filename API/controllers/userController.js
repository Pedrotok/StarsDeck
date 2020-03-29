import mongoose from 'mongoose'
import userSchema from '../models/userModel.js'
import * as githubHelper from '../utils/githubHelper.js'

const User = mongoose.model('User', userSchema);

export const addUser = async (req, res) => {
  try {
    let user = await User.findOne({ githubHandle: req.body.githubHandle });

    if (!user) {
      const githubUser = await githubHelper.findByHandle(req.body.githubHandle);
      user = new User({ name: githubUser.name, ...req.body });
    }
    else {
      user.score += req.body.score;
    }

    user.save((error, user) => {
      if (error) {
        res.json(error);
      }
      res.json(user);
    });
  }
  catch (error) {
    console.log(error);
    res.status(404).json({ error: error.ToString });
  }
}

export const getUsers = (req, res) => {
  User.find({}, (error, users) => {
    if (error) {
      res.json(error);
    }
    res.json(users);
  });
}

export const getTopUsers = async (req, res) => {
  User.find({}, null, {
    skip: 0,
    limit: 10,
    sort: {
      score: -1
    }
  },
    (error, topUsers) => {
      if (error) {
        res.json(error);
      }
      res.json(topUsers);
    });
}