import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js'
import Palette from './components/Palette.js'




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentColor: "green",
      collection: [],
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
    // console.log("ERASE COLOR IN APP");
    return this.setState({
      currentColor: "white",
    })
  }

  parseCollection = (pics) => {
    // pics.map((pic, i) => {
    //   // console.log(`${pic}`);
    //   let newCollection = this.state.collection;
    //   newCollection.push(`${pic}`);

      this.setState({
        collection: pics,
      })
    // })
  };






  render() {
    let pics = this.state.collection;

    let showCollection = pics.map((pic, i) => {
        console.log(pic);
        return <li className="pic"><img src={pic} width="200" alt="pic" /></li>
      })

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
          <Grid colorToUse={this.state.currentColor} parseCollection={this.parseCollection}
              eraseColor={this.eraseColor}
            />
          <Palette changeColor={this.changeColor}/>
        </section>



        <section>
          <h1 className="g-title">
            <span className="mistyrose">G</span><span className="lightPink ">A</span><span className="hotPink">L</span><span className="fushcia">L</span><span className="hotPink">E</span> <span className="lightPink">R</span><span className="mistyrose">Y</span>
          </h1>
          <ul className="gallery">
            {showCollection}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
