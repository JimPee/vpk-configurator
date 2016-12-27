import React, { PropTypes } from 'react';
import CreateTrigger from './create-trigger';
import Messages from '../messages/messages';

const CreatePanel = (props) => {
  const { messages, orderCreate } = props;
  return (
    <div>
      <CreateTrigger orderCreate={orderCreate} />
      <Messages checkMessages={messages} />
    </div>
  );
};

CreatePanel.propTypes = {
  messages: PropTypes.array.isRequired,
  orderCreate: PropTypes.func.isRequired,
};

export default CreatePanel;
