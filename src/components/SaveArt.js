import React, { Component } from 'react';
import './SaveArt.css';
import Save from './save.png'

class SaveArt extends Component {

  onClick = () => {
    this.props.saveHandler();
  }

  render() {
    return (
      <section>
        <button onClick={this.onClick}>
        <img src={Save} alt="save your work and show it on the gallery below with one click using this save button" className="save"/>
        </button>
      </section>
    )
  }
}

export default SaveArt;
