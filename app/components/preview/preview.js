import React, { Component } from 'react';
import { init } from './object-renderer';

class Preview extends Component {
  componentDidMount() {
    init('../../3D-models/Cardboard box.obj', '../../3D-models/Cardboard box.mtl');
  }
  render() {
    return (
      <div id="preview">
      </div>
    );
  }
}

export default Preview;
