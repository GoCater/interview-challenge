const express = require('express');
const router = express.Router();
const Author = require('../models/author');

router.get('/authors', async (_, res) => {
  const authors = await Author.find();
  res.json(authors);
});


module.exports = router;
