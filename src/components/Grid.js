import React, { Component } from 'react';
import './Grid.css';
class Grid extends Component {

  componentDidMount() {
      this.updateCanvas();
  };

  handleClick = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "red";
    // move to right, move to top, lengthen to right, lengthen to bottom
    ctx.fillRect(1, 1, 18, 8);
  }

  updateCanvas() {
      const canvas = this.refs.canvas;
      const ctx = canvas.getContext('2d');
      // ctx.fillRect(0,0, 200, 100);

      for (let i = 0; i <= 300; i += 20) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 600);
        ctx.lineWidth = 0.05;
        ctx.stroke();
      };

      for (let j = 0; j <= 300; j += 10) {
        ctx.moveTo(0, j);
        ctx.lineTo(600, j);
        ctx.lineWidth = 0.05;
        ctx.stroke();
      };

      canvas.addEventListener('click', this.handleClick)
  };

  render() {
    return (
      <div className="canvas-container">
      <canvas ref="canvas" className="canvas"></canvas>
      </div>
    );
  }
};


export default Grid;
