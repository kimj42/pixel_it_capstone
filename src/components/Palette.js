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
      ctx.lineTo(i, 60);
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    for (let j = 0; j <= ctx.canvas.height; j += 30) {
      ctx.moveTo(0, j);
      ctx.lineTo(60, j);
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    this.fillColor();

    canvas.addEventListener('click', this.pickColor);
  }

  fillColor() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = "pink";
    // move to right, move to top, lengthen to right, lengthen to bottom
    ctx.fillRect(0, 0, 30, 30);

    ctx.fillStyle = "magenta";
    ctx.fillRect(30, 0, 30, 30);
    //
    ctx.fillStyle = "purple";
    ctx.fillRect(0, 30, 30, 30);
    //
    ctx.fillStyle = "red";
    ctx.fillRect(30, 30, 30, 30);
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
    if (event.clientX >= 80 && event.clientX <= 110 && event.clientY >= 210 && event.clientY <= 240 ) {
      console.log("PINK");
      this.findColor(0, 0, 30, 30);
    }
    else if (event.clientX >= 110 && event.clientX <= 140 && event.clientY >= 210 && event.clientY <= 240) {
      // console.log("MAGENTA");
      this.findColor(30, 0, 30, 30);
    }
    else if (event.clientX >= 80 && event.clientX <= 110 && event.clientY >= 240 && event.clientY <= 270) {
      // console.log("PURPLE");
      this.findColor(0, 30, 30, 30);
    }
    else if (event.clientX >= 110 && event.clientX <= 140 && event.clientY >= 240 && event.clientY <= 270) {
      // console.log("RED");
      this.findColor(30, 30, 30, 30);
    }
  }

  render() {

    return (
      <div className="palette">
        <canvas ref="canvas" width="60" height="60">
        </canvas>
      </div>
    );
  }
}

export default Palette;
