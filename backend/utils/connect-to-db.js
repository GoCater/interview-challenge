const Promise = require('bluebird')
const config = require('../config/index.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connectToDB = async () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(config.mongoUrl, {
      useNewUrlParser: true
    }).then(() => {
      resolve();
      console.log("Successfully connected to the database");
    }).catch(err => {
      reject();
      console.log('Could not connect to the database. Exiting now...', err);
      process.exit();
    });
  });
}

module.exports = connectToDB;
