require('dotenv').config();
const express = require('express');
const router = express.Router();
const Tweet = require('../models/tweet');
const Author = require('../models/author');

router.get('/tweets/:pageSize/:page', async (req, res) => {
  const page = parseInt(req.params.page) - 1;
  const pageSize = parseInt(req.params.pageSize);

  const tweets = await Tweet.find({})
    .populate('author')
    .skip(page * pageSize)
    .limit(pageSize);

  res.json(tweets);
});

router.post('/tweets', (req, res) => {
  const content = req.body.content;
  const authorId = process.env.DEFAULT_AUTHOR;

  Tweet.create({
    content,
    author: authorId,
  }).then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

module.exports = router;
