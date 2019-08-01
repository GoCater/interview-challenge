import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./Tweet.css";

const CONTENT_MAX_LENGTH = 160;

const propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    handle: PropTypes.string.isRequired,
    profilePicture: PropTypes.string
  }),
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

const Tweet = props => {
  const { author, content, time } = props;
  const [showFullContent, setShowFullContent] = useState(
    content.length < CONTENT_MAX_LENGTH
  );

  return (
    <div className="tweet">
      <img className="avatar" src={author.profilePicture} alt={author.handle} />
      <p className="user-info">
        <span className="name">{`${author.firstName} ${author.lastName}`}</span>{" "}
        <span className="handle">{`@${author.handle}`}</span>
        <br />
        <span className="user-details">
          {`${author.followers} follower${author.followers > 1 ? "s" : ""}`}
        </span>
      </p>
      <p className="create-date">{moment(time).format("LLLL")}</p>
      {showFullContent && <p className="tweet-text">{content}</p>}
      {!showFullContent && (
        <React.Fragment>
          <p className="tweet-text">
            {content.substr(0, CONTENT_MAX_LENGTH)}...
            <br />
            <a className="expand" onClick={() => setShowFullContent(true)}>
              Expand details
            </a>
          </p>

        </React.Fragment>
      )}
    </div>
  );
};

Tweet.propTypes = propTypes;

export default Tweet;
