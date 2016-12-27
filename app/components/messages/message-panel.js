import React, { PropTypes } from 'react';
import MessageBody from './message-body';

const MessagePanel = (props) => {
  const { messages } = props;
  return (
    <div>
      {
        messages.map(message => {
          return <div key={message.message}>
            <MessageBody message={message} />
          </div>;
        })
      }
    </div>
  );
};

MessagePanel.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessagePanel;
