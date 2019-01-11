import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {

  constructor(props) {
    super(props);
  }

  resize = () => this.forceUpdate()

  componentDidMount() {
      this.updateCanvas();
      window.addEventListener('resize', this.resize)
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }



  getLocationOfBox(event, xMin, xMax, yMin, yMax, x, y, w, h) {
    if (event.x >= xMin && event.x <= xMax && event.y >= yMin && event.y <= yMax) {
      console.log("i'm in if statement");
      const ctx = this.refs.canvas.getContext('2d');
      // console.log(CANVAS);
      ctx.fillStyle = `${this.props.colorToUse}`;
      // move to right, move to top, lengthen to right, lengthen to bottom
      ctx.fillRect(x, y, w, h);
    };
  }

  handleClick = (event) => {

    let minY = 118;
    let maxY = minY + 20;
    //1st row
    for (let y = 0; y <= 280; y += 20) {
      let x = 0;

      for (let minX = 263; minX <= 543; minX += 20) {
        let maxX = minX + 20;
        this.getLocationOfBox(event, minX, maxX, minY, maxY, x, y, 20, 20)
        x += 20;
      }
      minY += 20;
      maxY += 20;
    }
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
