import React, { Component } from 'react';
import Preview from '../components/preview/preview';

class PreviewContainer extends Component {

  render() {
    return (
      <div>
        <Preview {...this.props} />
      </div>
    );
  }
}

export default PreviewContainer;
