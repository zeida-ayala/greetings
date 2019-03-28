import React, { Component } from 'react';
import MultiLineText from './MultiLineText.js'
import Dropdown from './Dropdown.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-content">
          <MultiLineText />
          <Dropdown />
        </div>
      </div>
    );
  }
}

export default App;
