import React, { PropTypes } from 'react';
import { notify } from 'react-notify-toast';

const MessagePanel = (props) => {
  const { messages } = props;
  return (
    <div>
    </div>
  );
};

MessagePanel.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessagePanel;
