import React, { Component } from 'react';
import './SaveArt.css';
import Save from './save.png'

class SaveArt extends Component {
  onClick = () => {
    this.props.saveHandler();
  }

  render() {
    return (
      <section>
        <div class="container">
        <img src={Save} onClick={this.onClick} alt="save your work and show it on the gallery below with one click using this save button" className="btn-change" data-toggle="tooltip" title="Save" tabindex="0" />
        </div>
      </section>
    )
  }
}

export default SaveArt;
