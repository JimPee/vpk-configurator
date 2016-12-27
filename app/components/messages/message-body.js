import React, { PropTypes } from 'react';
import styles from './message-body.css';

function getCorrectClass(message) {
  if (message.type === 'E') {
    return styles.error;
  }
  return styles.success;
}

const MessageBody = (props) => {
  const { message } = props;
  return (
    <div>
      <p className={getCorrectClass(message)}>
        {message.message}
      </p>
    </div>
  );
};

MessageBody.propTypes = {
  message: PropTypes.object.isRequired,
};

export default MessageBody;
