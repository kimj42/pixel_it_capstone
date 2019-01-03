import React, { Component } from 'react';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#FFFFFF'
    };
  }

  setColor(row, col) {
    const color = this.getColor(row, col);

    this.setState({ color });
    document.body.style.backgroundColor = color;
  }

  getColor(row, col) {
    const hue = Math.floor(col / this.props.height * 360);
    const sat = 100;
    const lit = Math.floor((1 - (row + 1) / (this.props.width + 1)) * 100);

    return `hsl(${hue},${sat}%,${lit}%)`;
  }

  render() {
    const rows = [];

    for (let i = 0; i < this.props.height; i++) {
      const cols = [];

      for (let j = 0; j < this.props.width; j++) {

        cols.push(
          <div
            className="col"
            onClick={
              () => this.setColor(j, i)
            }
            style={{
              backgroundColor: this.getColor(j, i)
            }} />
        );
      }

      rows.push(
        <div className="row">
          {cols}
        </div>
      );
    }

    return (
      <div className="palette">
        {rows}
      </div>
    );
  }
}

export default Palette;

// ReactDOM.render(<Palette width={6} height={6} />, document.body);
