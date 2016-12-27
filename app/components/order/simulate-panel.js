import React, { PropTypes } from 'react';
import SimulateTrigger from './simulate-trigger';
import SimulateFeedback from './simulate-feedback';
import Messages from '../messages/messages';

const SimulatePanel = (props) => {
  const { messages, feedback, orderSimulate } = props;
  return (
    <div>
      <SimulateTrigger orderSimulate={orderSimulate} />
      <Messages checkMessages={messages} />
      {
        feedback !== undefined && feedback.rate !== undefined && feedback.rate !== '' ?
        <SimulateFeedback rate={feedback.rate} /> :
        ''
      }
    </div>
  );
};

SimulatePanel.propTypes = {
  messages: PropTypes.array.isRequired,
  feedback: PropTypes.object,
  orderSimulate: PropTypes.func.isRequired,
};

export default SimulatePanel;
