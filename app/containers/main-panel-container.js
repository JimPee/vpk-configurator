import React, { Component } from 'react';
import MainPanel from '../components/main-panel/main-panel';

class MainPanelContainer extends Component {

  render() {
    return (
      <div>
        <MainPanel {...this.props} />
      </div>
    );
  }
}


export default MainPanelContainer;
