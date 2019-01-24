import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js'
import Palette from './components/Palette.js'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentColor: "green",
      collection: [],
      practiceApp: [],
      update: false,
    }

  }

  componentDidMount() {
    // could have used the asyn n try stuff but it seems unnecessary but good to know theres diff way to do it too. seems COR just literally lets u use the route
    document.title = "Pixel It";
    this.parseCollection();

  }

  changeColor = (color) => {
    console.log("CHANGE COLOR");
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
    return this.setState({
      currentColor: "white",
    })
  }

  parseCollection = (pics) => {
    axios.get('http://localhost:8000/api/images/')
    .then((response) => {
      this.setState({
        practiceApp: response.data,
      });
    })
    .catch((error) => {
      console.log("ERROR IN PARSE");
    })
  };


  render() {
      let arts = this.state.practiceApp;
      let artColl = arts.map(item => (
        <li className="pic"><img src={item.data_url} width="200" alt="pic" /></li>
      ))

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <span className="mistyrose">PIXEL </span> <span className="lightPink">IT </span>
            <link href="https://fonts.googleapis.com/css?family=Bungee+Shade" rel="stylesheet"/>
          </h1>

        </header>
        <section>
          <Grid colorToUse={this.state.currentColor} parseCollection={this.parseCollection}
              eraseColor={this.eraseColor}
            />
          <Palette changeColor={this.changeColor}/>
        </section>



        <section>
          <h1 className="g-title">
            <span className="mistyrose">GALLERY</span>
          </h1>
          <ul className="gallery">
            {artColl}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
