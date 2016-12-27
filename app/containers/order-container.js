import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { orderSimulate, orderCreate } from '../actions/order-actions';
import { getCreateMessages, getSimulateMessages } from '../selectors/message-selectors';
import { getFeedback, getShowCreate, getShowSimulate } from '../selectors/order-selectors';
import Order from '../components/order/order';

class OrderContainer extends Component {

  render() {
    return (
      <Order {...this.props} />
    );
  }
}

OrderContainer.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  simulateMessages: getSimulateMessages(state),
  createMessages: getCreateMessages(state),
  feedback: getFeedback(state),
  showSimulate: getShowSimulate(state),
  showCreate: getShowCreate(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    orderSimulate,
    orderCreate,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
