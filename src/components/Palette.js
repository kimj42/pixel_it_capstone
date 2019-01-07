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

  pickColor = (event) => {
    console.log("pickColor");

    const ctx = this.refs.canvas.getContext('2d');
    let pixelData = ctx.getImageData(0, 0, 30, 30).data;

    let colorNames = "";
    let colorPalette = [];

    for (let i = 0; i < 3; i += 1) {
      let r = pixelData[i];

      let rR = Number(r).toString(16);
      while (rR.length < 2) {
        rR = "0" + rR;
      }
      rR.toUpperCase();

      colorNames += rR;
    }
    console.log(colorNames);
    let rgbColorName = `#${colorNames}`
    colorPalette.push(rgbColorName);


    pixelData = ctx.getImageData(0, 0, 30, 30).data;

    colorNames = "";

    for (let i = 0; i < 3; i += 1) {
      let r = pixelData[i];

      let rR = Number(r).toString(16);
      while (rR.length < 2) {
        rR = "0" + rR;
      }
      rR.toUpperCase();

      colorNames += rR;
    }

    rgbColorName = `#${colorNames}`
    colorPalette.push(rgbColorName);

    console.log(colorPalette);

    // console.log(pixelData);
    // ctx.putImageData(pixelData, 80, 90)
    // this.setState({
    //   currentColor: "pink",
    // })

    this.props.changeColor(colorPalette[0]);
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

// ReactDOM.render(<Palette width={6} height={6} />, document.body);
