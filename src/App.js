import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js'
// import Palette from './components/Palette.js'

class App extends Component {
  componentDidMount(){
    document.title = "Pixel It"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pixel It</h1>
        </header>
        <section>
          <Grid />
        </section>
      </div>
    );
  }
}

export default App;
