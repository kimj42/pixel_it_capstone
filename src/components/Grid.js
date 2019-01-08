import React, { Component } from 'react';
import './Grid.css';
class Grid extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.updateCanvas();
  };

  handleClick = (event) => {
    console.log(event.x);
      //first box coordinates are
      //top left: x: 263, y: 118
      // top right: x: 284, y: 118
      //bottom left: x: 264, y: 137
      //bottom right: x: 283, y: 137

      if (event.x >= 263 && event.x <= 283 && event.y >= 118 && event.y <= 138) {
        console.log("i'm in if statement");
        const ctx = this.refs.canvas.getContext('2d');
        // console.log(CANVAS);
        ctx.fillStyle = `${this.props.colorToUse}`;
        // move to right, move to top, lengthen to right, lengthen to bottom
        ctx.fillRect(0, 0, 20, 20);

        //the last two 20 x 20, (x,y,20,20), will remain the same cuz that's the size of one pixel

        //2nd box vertical COLUMN
        // ctx.fillRect(0, 20, 20, 20);
        //3rd box
        // ctx.fillRect(0, 40, 20, 20);

        //2nd box horizontal ROW
        // ctx.fillRect(20, 0, 20, 20);
        //3rd box horizontal
        // ctx.fillRect(280, 280, 20, 20);
      };
  };



  clearCanvas = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, 300, 300);
    for (let i = 0; i <= ctx.canvas.width; i += 20) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 300);
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    for (let j = 0; j <= ctx.canvas.height; j += 20) {
      ctx.moveTo(0, j);
      ctx.lineTo(300, j);
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
        ctx.lineTo(i, 300);
        ctx.lineWidth = 1;
        ctx.stroke();
      };

      for (let j = 0; j <= ctx.canvas.height; j += 20) {
        ctx.moveTo(0, j);
        ctx.lineTo(300, j);
        ctx.lineWidth = 1;
        ctx.stroke();
      };

      canvas.addEventListener('click', this.handleClick);
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







// CLICK BOX AREA INSTRUCTIONS:










// FILL STYLE INSTRUCTIONS:
// starting point/default/1st pixel is {x:0, y: 0, w:20, h:20}
// total of 225 hashes like above for 300 x 300 px
// ROW: x min: 0, x max: 280
// COLUMN: y min: 0, y max: 280
// w stays constant at 20
// h stays constant at 20 as well
// end point/last pixel is {x:280, y:280, w:20, h:20}
