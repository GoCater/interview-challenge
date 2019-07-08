import React, { useState, useEffect } from 'react';
import { getTweets } from '../utils/remote-actions';
import Tweet from './Tweet';

const TweetList = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweets()
      .then(result => setTweets(result.data));
  },[]);

  return (
    <div>
      <button >Add</button>
      <button className="empty">Remove</button>
      <div className="tweets-list">
        {tweets.map(((tweet, index) => <Tweet key={index} {...tweet} />))}
      </div>
    </div>
  );
};

export default TweetList;
