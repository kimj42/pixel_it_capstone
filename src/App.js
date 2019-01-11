import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js'
import Palette from './components/Palette.js'
import Delete from './components/EraseSelectedPixel.js';
import Bucket from './components/Bucket.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentColor: "green",
    }
  }

  componentDidMount(){
    document.title = "Pixel It"
  }

  changeColor = (color) => {
    if (color !== "white"){
      this.setState({
        currentColor: color,
      })
    }
    else if (color === "white"){
      this.setState({
        currentColor: color,
      })
    }
  }

  eraseColor = () => {
    console.log("ERASE COLOR IN APP");
    return this.setState({
      currentColor: "white",
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <span className="mistyrose">P</span><span className="lightPink ">i</span><span className="hotPink">x</span><span className="fushcia">e</span><span className="hotPink">l</span> <span className="lightPink-space">I</span><span className="mistyrose">t</span>
            <link href="https://fonts.googleapis.com/css?family=Bungee+Outline" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Faster+One" rel="stylesheet"/>
          </h1>

        </header>
        <section>
          <Grid colorToUse={this.state.currentColor}/>
          <Palette changeColor={this.changeColor}/>
        </section>

        <section>
          <ul>
            <li>
              <Delete eraseColor={this.eraseColor}/>
            </li>
            <li>
              <Bucket />
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
