import React, { Component } from 'react';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: "white",
    }
  }

  componentDidMount() {
      this.createGridPalette();
  };

  createGridPalette() {
    const canvas = this.refs.canvas;
    // ctx means context and 2d lets me do a 2d drawing or fill
    const ctx = canvas.getContext('2d');


    for (let i = 0; i <= ctx.canvas.width; i += 30) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 120);
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    for (let j = 0; j <= ctx.canvas.height; j += 30) {
      ctx.moveTo(0, j);
      ctx.lineTo(120, j);
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    this.fillColor();

    canvas.addEventListener('click', this.pickColor);
  }

  fillColor() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = "#f44336";
    // move to right, move to top, lengthen to right, lengthen to bottom
    ctx.fillRect(0, 0, 30, 30);

    ctx.fillStyle = "#e91e63";
    // move to right, move to top, lengthen to right, lengthen to bottom
    ctx.fillRect(0, 30, 30, 30);

    ctx.fillStyle = "#9c27b0";
    // move to right, move to top, lengthen to right, lengthen to bottom
    ctx.fillRect(0, 60, 30, 30);

    ctx.fillStyle = "#673ab7";
    // move to right, move to top, lengthen to right, lengthen to bottom
    ctx.fillRect(0, 90, 30, 30);

    ctx.fillStyle = "#006b76";
    ctx.fillRect(30, 0, 30, 30);

    ctx.fillStyle = "#1273de";
    ctx.fillRect(60, 0, 30, 30);

    ctx.fillStyle = "#004dcf";
    ctx.fillRect(90, 0, 30, 30);

    ctx.fillStyle = "#eb9694";
    ctx.fillRect(30, 30, 30, 30);
    //
    ctx.fillStyle = "#fad0c3";
    ctx.fillRect(30, 60, 30, 30);

    ctx.fillStyle = "#ffeb3b";
    ctx.fillRect(30, 90, 30, 30);

    ctx.fillStyle = "#ffc107";
    ctx.fillRect(60, 30, 30, 30);

    ctx.fillStyle = "#f06292";
    ctx.fillRect(90, 90, 30, 30);

    ctx.fillStyle = "#795548";
    ctx.fillRect(60, 60, 30, 30);

    ctx.fillStyle = "#194d33";
    ctx.fillRect(60, 90, 30, 30);

    ctx.fillStyle = "#00bcd4";
    ctx.fillRect(90, 60, 30, 30);

    ctx.fillStyle = "#666666";
    ctx.fillRect(90, 30, 30, 30);

  }

  findColor(x, y, w, h) {
    const ctx = this.refs.canvas.getContext('2d');
    let pixelData = ctx.getImageData(x, y, w, h).data;
    let colorNames = "";

    for (let i = 0; i < 3; i += 1) {
      let r = pixelData[i];

      let rR = Number(r).toString(16);
      while (rR.length < 2) {
        rR = "0" + rR;
      }
      rR.toUpperCase();

      colorNames += rR;
    }

    let rgbColorName = `#${colorNames}`
    this.props.changeColor(rgbColorName);
  }

  pickColor = (event) => {
    let minY = event.target.offsetTop;
    let maxY = minY + 30;
    //1st row
    for (let y = 0; y <= 90; y += 30) {
      let x = 0;

      for (let minX = event.target.offsetLeft; minX <= (event.target.offsetLeft + (event.target.height - 30)); minX += 30) {
          let maxX = minX + 30;
          if (event.clientX >= minX && event.clientX <= maxX && event.clientY >= minY && event.clientY <= maxY) {
            this.findColor(x, y, 30, 30);
          }
          x += 30;
      }
      minY += 30;
      maxY += 30;
    }
  }

  render() {

    return (
      <div className="palette">
        <canvas ref="canvas" width="120" height="120">
        </canvas>
      </div>
    );
  }
}

export default Palette;
