import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DropdownsContainer from './dropdowns-container';
import { getBoardGradeValues, getPaletTypes, getWidth, getLength } from '../selectors/dropdown-selectors';
import { setBoxScores, setFefcosheet, checkDropdowns, updateValue } from '../actions/dropdown-actions';

class SidepanelContainer extends Component {
  render() {
    return (
      <div>
        <DropdownsContainer />
      </div>
    );
  }
}

SidepanelContainer.propTypes = {
  boxHasScores: PropTypes.bool.isRequired,
  boardGradeValues: PropTypes.object,
  paletTypes: PropTypes.object,
  width: PropTypes.object,
  length: PropTypes.object,
};

const mapStateToProps = (state) => ({
  boxHasScores: state.boxProperties.hasScores,
  boardGradeValues: getBoardGradeValues(state.dropdowns.dropdowns),
  paletTypes: getPaletTypes(state.dropdowns.dropdowns),
  width: getWidth(state.dropdowns.dropdowns),
  length: getLength(state.dropdowns.dropdowns),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    setBoxScores,
    setFefcosheet,
    checkDropdowns,
    updateValue,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidepanelContainer);
