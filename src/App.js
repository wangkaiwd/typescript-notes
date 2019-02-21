import React, { Component } from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="javascript:;"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary">
              Learn React
            </Button>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
