import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { getTweetsPaginated } from "../utils/remote-actions";
import Tweet from "./Tweet";

const PAGE_SIZE = 2;

const TweetList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [noMoreTweets, setNoMoreTweets] = useState(false);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      const request = await getTweetsPaginated(PAGE_SIZE, currentPage);

      if (request.data.length > 0) {
        setTweets([...request.data, ...tweets]);
      } else {
        setNoMoreTweets(true);
      }
    };

    if (currentPage > 0) {
      getTweets();
    }
  }, [currentPage]);

  const increasePageCounter = () => setCurrentPage(currentPage + 1);
  const clearList = () => {
    setTweets([]);
    setCurrentPage(0);
    setNoMoreTweets(false);
  };

  return (
    <div>
      {!noMoreTweets && (
        <Button variant="primary" onClick={increasePageCounter}>
          Load more
        </Button>
      )}{" "}
      <Button variant="danger" onClick={clearList}>Clear list</Button>
      <div className="tweets-list">
        {tweets.map((tweet, index) => (
          <Tweet key={index} {...tweet} />
        ))}
      </div>
    </div>
  );
};

export default TweetList;
