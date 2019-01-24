import React, { Component } from 'react';
import './Grid.css';
import Bucket from './Bucket.js'
import Brush from './brush.png'
import SaveArt from './SaveArt.js'
import Delete from './EraseSelectedPixel.js';
import axios from 'axios';

class Grid extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bucketOn: false,
      collection: [],
      currentArt: "",
    }
  }

  componentDidMount() {
      this.updateCanvas();
  };

  getLocationOfBox(event, xMin, xMax, yMin, yMax, x, y, w, h) {
    if (event.x >= xMin && event.x <= xMax && event.y >= yMin && event.y <= yMax) {
      const ctx = this.refs.canvas.getContext('2d');
      // console.log(CANVAS);
      ctx.fillStyle = `${this.props.colorToUse}`;
      // move to right, move to top, lengthen to right, lengthen to bottom
      ctx.fillRect(x, y, w, h);
    };
  }

  handleClick = (event) => {

    let minY = event.target.offsetTop;
    let maxY = minY + 20;
    //1st row
    for (let y = 0; y <= 280; y += 20) {
      let x = 0;

      for (let minX = event.target.offsetLeft; minX <= (event.target.offsetLeft + (event.target.height - 20)); minX += 20) {
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

  drawGrid() {
    const canvas = this.refs.canvas;
    // ctx means context and 2d lets me do a 2d drawing or fill
    const ctx = canvas.getContext('2d');


    for (let i = 0; i <= ctx.canvas.width; i += 20) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 300);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'white';
      ctx.stroke();
    };

    for (let j = 0; j <= ctx.canvas.height; j += 20) {
      ctx.moveTo(0, j);
      ctx.lineTo(300, j);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'white';
      ctx.stroke();
    };
  }

  updateCanvas() {
    // this gets the ref attribute from canvas tag
    const canvas = this.refs.canvas;
    // ctx means context and 2d lets me do a 2d drawing or fill
    this.drawGrid();

    let mousePressed = false;

    if (this.state.bucketOn === false){
      canvas.addEventListener('mousedown', (event) => {mousePressed = true;
      this.handleClick(event);
      });
      canvas.addEventListener('mousemove', (event) => { if (mousePressed) {
        this.handleClick(event);
      }});
      canvas.addEventListener('mouseup', (event) => {
        mousePressed = false;
        this.handleClick(event);
      });
    }
    else if (this.state.bucketOn === true){
      console.log("THIS WORKS");
    }

  };

  bucketFillGrid = () => {
    console.log("BUC IN GRID");
    const ctx = this.refs.canvas.getContext('2d');

    ctx.fillStyle = `${this.props.colorToUse}`
    ctx.fillRect(0, 0, 300, 300);
  };

  changeToBucket = () => {
    this.setState({
      bucketOn: true,
    }, () => {
      this.refs.canvas.addEventListener('click',
        this.bucketFillGrid)
      }
    );
  };

  changeToBrush = () => {
    return this.setState({
      bucketOn: false,
    })
  }

  save = () => {
    const art = {
      "data_url": `${this.refs.canvas.toDataURL("image/png")}`,
    "pub_date": null,
    }

    axios.post('http://localhost:8000/api/images/', art)
    .then((response) => {
      console.log(response.data);
      this.props.parseCollection();
    })
    .catch((error) => {
      console.log("FAILED", error);
    })

    let newCollection = [...this.state.collection, this.refs.canvas.toDataURL("image/png")];

    // this.props.updatePracticeApp(newCollection);

    //this to save to local machine
    // window.open(this.refs.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  }


  render() {
    return (
      <div className="canvas-container">
        <canvas ref="canvas" width="300" height="300">
        </canvas>

        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>


        <section className="clear-btn-container">
          <div class="container">
	<div class="row">
          <ul className="button-list">
            <li className="button-space">
              <img src="https://www.freeiconspng.com/uploads/power-restart-icon-3.png"
                className="btn-change" alt="reset button" onClick={this.clearCanvas}/>
            </li>
            <li className="button-space">
                <img src={Brush} onClick={this.changeToBrush} alt="fill in one pixel at a time by clicking this brush button" className="btn-change"/>
            </li>
            <li className="button-space">
              <Bucket colorToUse={this.props.colorToUse} clickHandler={this.bucketFillGrid} />
            </li>
            <li className="button-space">
              <Delete eraseColor={this.props.eraseColor} />
            </li>
            <li className="button-space">
              <SaveArt saveHandler={this.save} />
            </li>
          </ul>
        </div>
</div>

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
