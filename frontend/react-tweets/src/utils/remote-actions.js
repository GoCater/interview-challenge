import axios from 'axios';

const API_URL = 'http://localhost:4000'

const getUrl = endpoint => `${API_URL}/api${endpoint}`;

export const getTweets = async () => {
  return axios.get(getUrl('/tweets'));
};
