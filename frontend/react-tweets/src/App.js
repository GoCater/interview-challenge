import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

import TweetList from './components/TweetList';
import TweetCreationForm from './components/TweetCreationForm';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [activeTab, setActiveTab] = useState("tweets");

  return (
    <div className="app">
      <Nav variant="tabs" activeKey={activeTab}>
        <Nav.Item>
          <Nav.Link eventKey="tweets" onSelect={() => setActiveTab('tweets')}>
            Tweets
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="create-tweet" onSelect={() => setActiveTab('createTweet')}>
            Create Tweet
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="tab-content">
        {activeTab === "tweets" && <TweetList />}
        {activeTab === "createTweet" && <TweetCreationForm />}
      </div>
    </div>
  );
};

export default App;
