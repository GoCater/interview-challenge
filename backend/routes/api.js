const express = require('express');
const router = express.Router();
const Tweet = require('../models/tweet');
const Author = require('../models/author');

router.get('/tweets', async (_, res) => {
  const tweets = await Tweet.find({}).populate('author');
  res.json(tweets);
});

router.get('/authors', async (_, res) => {
  const authors = await Author.find();
  res.json(authors);
});

module.exports = router;
