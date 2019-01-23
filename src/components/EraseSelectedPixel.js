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
        <img src={Eraser} onClick={this.onClick} alt="delete selected pixel after clicking on this button" className="btn-change" />
      </div>
    );
  };
};

export default Delete;
