import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

import TweetList from './components/TweetList';
import AuthorsList from './components/AuthorsList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DEFAULT_AUTHOR_PIC =
  'http://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/128.jpg';

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
          <Nav.Link eventKey="authors" onSelect={() => setActiveTab('authors')}>
            Authors
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="tab-content">
        {activeTab === "tweets" && <TweetList />}
        {activeTab === "authors" && <AuthorsList />}
      </div>
    </div>
  );
};

export default App;
