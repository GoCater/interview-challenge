const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Author = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
  handle: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    default: Math.floor(Math.random() * 3000)
  },
});

module.exports = mongoose.model('author', Author);
