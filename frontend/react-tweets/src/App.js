import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Nav variant="tabs" activeKey="tweets">
          <Nav.Item>
            <Nav.Link eventKey="tweets" onSelect={() => this.setActiveTab('tweets')}>
              Tweets
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="create-tweet" onSelect={() => this.setActiveTab('createTweet')}>
              Create Tweet
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="tab-content"></div>
      </div>
    );
  }
};

export default App;
