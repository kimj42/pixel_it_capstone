import React, {Component} from 'react';
import './Bucket.css';
import BucketIcon from './bucket.png'

class Bucket extends Component {
  onClick = () => {
    this.props.clickHandler();
  }

  render() {
    return (
      <section>
        <img src={BucketIcon} onClick={this.onClick} alt="fill in multiple pixels with one click using this bucket button" className="btn-change"/>
      </section>
    )
  }
}

export default Bucket;
