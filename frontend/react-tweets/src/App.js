import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const setActiveTab = () => {};

const App = () => {
  return (
    <div className="app">
      <Nav variant="tabs" activeKey="tweets">
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
      <div className="tab-content"></div>
    </div>
  );
};

export default App;
