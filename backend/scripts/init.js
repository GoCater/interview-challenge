const fs = require('fs');
const Promise = require('bluebird');
const connectToDB = require('../utils/connect-to-db');
const Author = require('../models/author');

const createDefaultAuthor = async () => {
  const author = await Author.create({
    firstName: 'Isaac',
    lastName: 'Asimov',
    handle: 'irobot',
    profilePicture: 'http://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/128.jpg',
  });

  return new Promise((resolve, reject) => {
    fs.writeFile('.env', `DEFAULT_AUTHOR=${author._id}`, error => {
      if (!error) {
        return resolve();
      }

      return reject();
    });
  });
};

connectToDB()
  .then(createDefaultAuthor)
  .then(() => {
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    Logger.error('Error', err, err.stack);
    process.exit(1);
  });
