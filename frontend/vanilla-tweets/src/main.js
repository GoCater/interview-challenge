const CANNED_TWEET = {
  created: {
    date: new Date(2015, 7, 8),
    human: 'Aug 8 2015'
  },

  author: {
    name: 'Joe Schmoe',
    handle: '@mrjoeschmoe',
    url: 'http://example.com',
    numFollowers: 1083,
    avatar: 'http://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/128.jpg'
  },

  tweet:
    'Authentic four dollar toast disrupt. Pour-over swag blog, art party stumptown seitan cray. Kickstarter pork belly 3 wolf moon selfies cray'
};


const API_URL = 'http://localhost:4000';
const getUrl = endpoint => `${API_URL}/api${endpoint}`;


document.addEventListener('DOMContentLoaded', function() {
  // ADD YOUR CODE HERE.


  $('#tweet-creation-form').submit(function (ev) {
    ev.preventDefault();
    const tweet = {
      content: $('#tweet-content').val(),
    };
    $.post(getUrl('/tweets'), {
      tweet,
    });
  });
});
