require('dotenv').config();
const express = require('express');
const router = express.Router();
const Tweet = require('../models/tweet');
const Author = require('../models/author');

router.get('/health', async (req, res) => {
  res.sendStatus(200);
});


module.exports = router;
