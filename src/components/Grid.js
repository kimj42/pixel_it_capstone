import React, { Component } from 'react';
import './Grid.css';
class Grid extends Component {

  componentDidMount() {
      this.updateCanvas();
      // const canvas = this.refs.canvas;
      // console.log(this.refs.canvas);
      // const CANVAS = this.refs.canvas;
      // window.addEventListener('click', function(event){
      //   console.log(event.x, event.y);
      //   //first box coordinates are
      //   //top left: x: 263, y: 118
      //   // top right: x: 284, y: 118
      //   //bottom left: x: 264, y: 137
      //   //bottom right: x: 283, y: 137
      //
      //   if (event.x >= 263 && event.x <= 283 && event.y >= 118 && event.y <= 138) {
      //     console.log("i'm in if statement");
      //     console.log(CANVAS);
      //     CANVAS.addEventListener('click', this.handleClick);
      //   }
      // })
  };

  handleClick = (event) => {

    // const CANVAS = this.refs.canvas;
    // window.addEventListener('click', function(event){
    //   console.log(event.x, event.y);
      //first box coordinates are
      //top left: x: 263, y: 118
      // top right: x: 284, y: 118
      //bottom left: x: 264, y: 137
      //bottom right: x: 283, y: 137

      if (event.x >= 263 && event.x <= 283 && event.y >= 118 && event.y <= 138) {
        console.log("i'm in if statement");
        const ctx = this.refs.canvas.getContext('2d');
        // console.log(CANVAS);
        ctx.fillStyle = "red";
        // move to right, move to top, lengthen to right, lengthen to bottom
        ctx.fillRect(0, 0, 20, 20);
      }
    // })
    //
    // const canvas = this.refs.canvas;
    // const ctx = canvas.getContext('2d');
    //
    // ctx.fillStyle = "red";
    // // move to right, move to top, lengthen to right, lengthen to bottom
    // ctx.fillRect(0, 0, 20, 20);
    //
    // ctx.fillStyle = "blue";
    // ctx.fillRect(0, 20, 20, 20);
  };

  clearCanvas = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, 300, 300);
    for (let i = 0; i <= ctx.canvas.width; i += 20) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 600);
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    for (let j = 0; j <= ctx.canvas.height; j += 20) {
      ctx.moveTo(0, j);
      ctx.lineTo(600, j);
      ctx.lineWidth = 1;
      ctx.stroke();
    };
  };



  updateCanvas() {
      // this gets the ref attribute from canvas tag
      const canvas = this.refs.canvas;
      // ctx means context and 2d lets me do a 2d drawing or fill
      const ctx = canvas.getContext('2d');


      for (let i = 0; i <= ctx.canvas.width; i += 20) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 600);
        ctx.lineWidth = 1;
        ctx.stroke();
      };

      for (let j = 0; j <= ctx.canvas.height; j += 20) {
        ctx.moveTo(0, j);
        ctx.lineTo(600, j);
        ctx.lineWidth = 1;
        ctx.stroke();
      };

      canvas.addEventListener('click', this.handleClick)
  };



  render() {

    return (
      <div className="canvas-container">
        <canvas ref="canvas" width="300" height="300">
        </canvas>

        <section className="clear-btn-container">
          <button onClick={this.clearCanvas}>
            Reset
          </button>
        </section>
      </div>
    );
  };
};


export default Grid;
