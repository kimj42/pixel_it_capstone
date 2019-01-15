import React, { Component } from 'react';
import './EraseSelectedPixel.css';
import Eraser from './eraser.png'

class Delete extends Component {

  onClick = () => {
    this.props.eraseColor();
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
