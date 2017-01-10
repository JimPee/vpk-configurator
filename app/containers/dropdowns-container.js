import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllDropdowns, checkDropdowns, updateValue } from '../actions/dropdown-actions';
import { getDropdowns } from '../selectors/dropdown-selectors';
import { getCheckMessages } from '../selectors/message-selectors';
import Dropdowns from '../components/dropdowns/dropdowns';

class DropdownsContainer extends Component {

  componentDidMount() {
    this.props.actions.getAllDropdowns();
  }

  render() {
    return (
      <div>
        <Dropdowns {...this.props} />
      </div>
    );
  }
}

DropdownsContainer.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  dropdowns: getDropdowns(state),
  checkMessages: getCheckMessages(state),
  loading: state.dropdowns.loading,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getAllDropdowns,
    checkDropdowns,
    updateValue,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownsContainer);
