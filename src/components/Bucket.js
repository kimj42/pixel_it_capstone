import React, {Component} from 'react';
import './Bucket.css';
import BucketIcon from './bucket.png'

class Bucket extends Component {
  onClick = () => {
    console.log("BUC IN BUCKET");
    console.log(this.props.colorToUse);
    this.props.clickHandler();
  }

  render() {
    return (
      <section>
        <button onClick={this.onClick}>
        <img src={BucketIcon} alt="fill in multiple pixels with one click using this bucket button" className="bucket"/>
        </button>
      </section>
    )
  }
}

export default Bucket;
