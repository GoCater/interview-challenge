const fs = require('fs');
const Promise = require('bluebird');
const connectToDB = require('../utils/connect-to-db');
const Author = require('../models/author');
const Tweet = require('../models/tweet');

connectToDB()
  .then(async () => {
    await Author.deleteMany({});
    await Tweet.deleteMany({});
  })
  .then(() => {
    console.log('Successfully cleared authors and tweets.');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error', err, err.stack);
    process.exit(1);
  });
