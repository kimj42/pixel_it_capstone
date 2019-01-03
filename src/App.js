import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js'
import Palette from './components/Palette.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pixel It</h1>
        </header>
        <body>
          <Grid />
          <Palette />
        </body>
      </div>
    );
  }
}

export default App;
