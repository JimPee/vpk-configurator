import React, { PropTypes } from 'react';
import MessagePanel from './message-panel';

const Messages = (props) => {
  const { checkMessages } = props;

  return (
    <div>
      <MessagePanel
        messages={checkMessages}
      />
    </div>
  );
};

Messages.propTypes = {
  checkMessages: PropTypes.array.isRequired,
};

export default Messages;
