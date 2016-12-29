import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainPanel from '../components/main-panel/main-panel';
import { setBoxHasScores, checkDropdowns } from '../actions/dropdown-actions'

class MainPanelContainer extends Component {

  render() {
    return (
      <div>
        <MainPanel boxHasScores={this.props.boxHasScores} {...this.props} />
      </div>
    );
  }
}

MainPanelContainer.propTypes = {
  boxHasScores: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  boxHasScores: state.boxProperties.hasScores,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    setBoxHasScores,
    checkDropdowns,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPanelContainer);
