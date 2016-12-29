import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidepanel from '../components/sidepanel/sidepanel';
import { getBoardGradeValues, getPaletTypes } from '../selectors/dropdown-selectors';
import { setBoxScores, setFefcosheet } from '../actions/dropdown-actions';
import { checkDropdowns, updateValue } from '../actions/dropdown-actions';

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
  boardGradeValues: PropTypes.object,
  paletTypes: PropTypes.object,
};

const mapStateToProps = (state) => ({
  boxHasScores: state.boxProperties.hasScores,
  boardGradeValues: getBoardGradeValues(state.dropdowns.dropdowns),
  paletTypes: getPaletTypes(state.dropdowns.dropdowns),
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
