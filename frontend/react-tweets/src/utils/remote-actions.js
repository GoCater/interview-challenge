import axios from 'axios';

const API_URL = 'http://localhost:4000'

const getUrl = endpoint => `${API_URL}/api${endpoint}`;

export const getTweetsPaginated = async (pageSize, page) => {
  return axios.get(getUrl(`/tweets/${pageSize}/${page}`));
};

export const postNewTweet = async tweet => {
  return axios.post(getUrl('/tweets'), tweet);
};
