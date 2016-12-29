import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Sidepanel from '../components/sidepanel/sidepanel';
import { getBoardGradeValues, getPaletTypes } from '../selectors/dropdown-selectors';

class SidepanelContainer extends Component {
  render() {
    return (
      <div>
        <Sidepanel boxHasScores={this.props.boxHasScores}
                   boardGradeValues={this.props.boardGradeValues}
                   paletTypes={this.props.paletTypes}
                   {...this.props}/>
      </div>
    );
  }
}

SidepanelContainer.propTypes = {
  boxHasScores: PropTypes.bool.isRequired,
  boardGradeValues: PropTypes.array,
  paletTypes: PropTypes.array,
};

const mapStateToProps = (state) => ({
  boxHasScores: state.boxProperties.hasScores,
  boardGradeValues: getBoardGradeValues(state.selections.selections),
  paletTypes: getPaletTypes(state.selections.selections),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    setBoxScores,
    setFefcosheet,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidepanelContainer);
