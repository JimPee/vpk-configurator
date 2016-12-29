import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Overview from '../components/overview/overview';
import { getBoardGradeValues, getPaletTypes, getWidth, getLength } from '../selectors/dropdown-selectors';

class OverviewContainer extends Component {
  render() {
    const values = [this.props.width, this.props.paletTypes, this.props.boardGradeValues, this.props.length];
    return (
      <div>
        <Overview values={values}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  boardGradeValues: getBoardGradeValues(state.dropdowns.dropdowns),
  paletTypes: getPaletTypes(state.dropdowns.dropdowns),
  width: getWidth(state.dropdowns.dropdowns),
  length: getLength(state.dropdowns.dropdowns),
});

OverviewContainer.propTypes = {
  boardGradeValues: PropTypes.object,
  paletTypes: PropTypes.object,
  width: PropTypes.object,
  length: PropTypes.object,
};

export default connect(mapStateToProps)(OverviewContainer);
