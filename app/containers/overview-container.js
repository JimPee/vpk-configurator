import React, { Component } from 'react';
import Overview from '../components/overview/overview';

class OverviewContainer extends Component {

  render() {
    return (
      <div>
        <Overview {...this.props} />
      </div>
    );
  }
}

export default OverviewContainer;
