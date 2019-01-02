import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pixel It</h1>
        </header>
        <body>
          <Main />
        </body>
      </div>
    );
  }
}

export default App;
