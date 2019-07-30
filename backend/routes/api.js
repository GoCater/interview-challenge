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

router.get('/authors', async (_, res) => {
  const authors = await Author.find();
  res.json(authors);
});

router.post('/authors', async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const handle = req.body.handle;
  const profilePicture = req.body.profilePicture;

  Author.create({
    firstName,
    lastName,
    handle,
    profilePicture,
  })
    .then(_ => res.sendStatus(200))
    .catch(_ => res.sendStatus(500));
});

module.exports = router;
