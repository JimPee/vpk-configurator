import React, { Component, PropTypes } from 'react';
import Alert from 'react-s-alert';

class MessageBody extends Component {

  constructor() {
    super();
    this.checkErrorMessage = this.checkErrorMessage.bind(this);
  }

  componentDidMount() {
    if (this.checkErrorMessage(this.props.message.type)) {
      Alert.error(this.props.message.message, {
        position: 'bottom-left',
        effect: 'slide',
        html: false,
        offset: 50,
        timeout: 5000,
      });
    } else {
      Alert.warning(this.props.message.message, {
        position: 'bottom-left',
        effect: 'slide',
        html: false,
        offset: 50,
        timeout: 5000,
      });
    }
  }

  checkErrorMessage(type) {
    if (type === 'E') {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

MessageBody.propTypes = {
  message: PropTypes.object.isRequired,
};

export default MessageBody;
