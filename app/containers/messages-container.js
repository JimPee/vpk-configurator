import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCheckMessages } from '../selectors/message-selectors';
import Messages from '../components/messages/messages';

class MessagesContainer extends Component {

  render() {
    return (
      <div>
        <Messages {...this.props} />
      </div>
    );
  }
}

MessagesContainer.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  checkMessages: getCheckMessages(state),
  loading: state.selections.loading,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
