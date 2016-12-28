import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Sidepanel from '../components/sidepanel/sidepanel';

class SidepanelContainer extends Component {

  render() {
    return (
      <div>
        <Sidepanel boxHasScores={this.props.boxHasScores}/>
      </div>
    );
  }
}

SidepanelContainer.propTypes = {
  boxHasScores: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  boxHasScores: state.boxProperties.hasScores,
});

export default connect(mapStateToProps)(SidepanelContainer);
