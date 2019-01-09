import React, { Component } from 'react';
import './EraseSelectedPixel.css';
import Eraser from './eraser.png'

class Delete extends Component {

  onClick = () => {
    console.log("ON CLICK IN DELETE");
    this.props.changeColor("white");
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>
        <img src={Eraser} alt="delete selected pixel after clicking on this button" className="eraser" />
        </button>
      </div>
    );
  };
};

export default Delete;
