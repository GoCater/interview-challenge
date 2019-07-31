const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tweet = new Schema({
  content: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'author',
    required: true
  },
});

module.exports = mongoose.model('tweet', Tweet);
