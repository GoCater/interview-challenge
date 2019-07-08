import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    handle: PropTypes.string.isRequired,
    profilePicture: PropTypes.string,
  }),
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

const Tweet = props => {
  const {
    author,
    content,
    time
  } = props;

  return (
    <div className="tweet">
      <img className="avatar" />
      <p className="user-info">
        <span className="name">{`${author.firstName} ${author.lastName}`}</span>
        <span className="handle">{`@${author.handle}`}</span>
        <br/>
        <span className="user-details">{`${author.followers} followers`}</span>
      </p>

      <p className="create-date">{moment(time).format('LLLL')}</p>
      <p className="tweet-text">{content}</p>
    </div>
  );
};

Tweet.propTypes = propTypes;

export default Tweet;
