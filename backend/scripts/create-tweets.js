const Promise = require('bluebird');
const yargs = require('yargs');
const dotenv = require('dotenv');
const connectToDB = require('../utils/connect-to-db');
const Tweet = require('../models/tweet');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

dotenv.config();

const opts = yargs.usage('Usage: $0 [options]')
  .example(
    '$0 -a ObjectID -n 15',
    'Creates N new tweets in the DB with random content, ' +
    'associated to the given author-[a]'
  )
  .option('a', {
    alias: 'author',
    describe: 'Author Id',
  })
  .option('n', {
    alias: 'numberOfTweets',
    describe: 'Number of tweets to be created',
    default: 10,
  })
  .help('h')
  .version(false)
  .alias('h', 'help').argv;

const contentGenerator = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const createTweet = author => {
  const content = contentGenerator.generateParagraphs(1);

  return Tweet.create({
    content,
    author,
  });
};

const createTweets = async () => {
  const author = opts.author || process.env.DEFAULT_AUTHOR;
  const iterationsArray = [...Array(opts.numberOfTweets).keys()];

  await Promise.all(
    iterationsArray.map(() => createTweet(author))
  )
};

connectToDB()
  .then(createTweets)
  .then(() => {
    console.log(`Successfully created ${opts.numberOfTweets} tweets.`);
    process.exit(0);
  })
  .catch(err => {
    console.error('Error', err, err.stack);
    process.exit(1);
  });
