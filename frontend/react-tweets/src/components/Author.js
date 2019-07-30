import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './Author.css';

const propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    handle: PropTypes.string.isRequired,
    joinedAt: PropTypes.string,
    profilePicture: PropTypes.string
  })
};

const Author = ({ author }) => {
  const {
    firstName,
    lastName,
    joinedAt,
    handle,
    profilePicture,
    followers
  } = author;

  return (
    <div className="author">
      <img className="author-profile-pic" src={profilePicture} alt={handle}/>
      <div className="author-data">
        <span className="author-name">{`${firstName} ${lastName} @${handle}`}</span>
        <span className="author-joined">
          Joined at: {moment(joinedAt).format('LLLL')}
        </span>
        <span className="author-followers">{`${followers} follower${
          followers > 1 ? 's' : ''
        }`}</span>
      </div>
    </div>
  );
};

Author.propTypes = propTypes;

export default Author;
