import mongoose from 'mongoose'

export const getEvents = async (req, res) => {
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