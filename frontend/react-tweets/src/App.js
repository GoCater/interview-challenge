import React, {Component} from 'react';
import './App.css';
import TweetList from './components/TweetList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tweet list</h1>
        </header>
        <TweetList />
      </div>
    );
  }
}

export default App;
