import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js'
import Palette from './components/Palette.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentColor: "white",
    }
  }

  componentDidMount(){
    document.title = "Pixel It"
  }

  changeColor = (color) => {
    return this.setState({
      currentColor: color,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pixel It</h1>
        </header>
        <section>
          <Grid colorToUse={this.state.currentColor}/>
          <Palette changeColor={this.changeColor}/>
        </section>
      </div>
    );
  }
}

export default App;
