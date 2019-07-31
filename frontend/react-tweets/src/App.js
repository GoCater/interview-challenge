import React from 'react';
import Nav from 'react-bootstrap/Nav';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const changeTab = () => {};

const App = () => {
  return (
    <div className="app">
      <Nav variant="tabs" activeKey="tweets">
        <Nav.Item>
          <Nav.Link eventKey="tweets" onSelect={() => changeTab('tweets')}>
            Tweets
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="authors" onSelect={() => changeTab('authors')}>
            Authors
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="tab-content">
      </div>
    </div>
  );
};

export default App;
