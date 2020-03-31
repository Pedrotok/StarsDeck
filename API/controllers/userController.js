import mongoose from 'mongoose'
import userSchema from '../models/userModel.js'
import eventSchema from '../models/eventModel.js'
import * as githubHelper from '../utils/githubHelper.js'
import * as eventHelper from '../utils/eventHelper.js'

const User = mongoose.model('User', userSchema);
const Event = mongoose.model('Event', eventSchema);

export const addEventForUser = async (req, res) => {
  try {
    let user = await User.findOne({ githubHandle: req.body.githubHandle });
    const eventScore = eventHelper.getScore(req.body.type);

    if (!user) {
      const { name, avatar_url } = await githubHelper.findByHandle(req.body.githubHandle);
      user = new User({ name, profilePictureUrl: avatar_url, ...req.body });
    }

    const event = new Event({ ...req.body });
    user.score += eventScore;
    user.eventList.push(event);

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