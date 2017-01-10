import React, { PropTypes } from 'react';
import SimulateTrigger from './simulate-trigger';
import SimulateFeedback from './simulate-feedback';

const SimulatePanel = (props) => {
  const { feedback, orderSimulate } = props;
  return (
    <div>
      <SimulateTrigger orderSimulate={orderSimulate} />
      {
        feedback !== undefined && feedback.rate !== undefined && feedback.rate !== '' ?
        <SimulateFeedback rate={feedback.rate} /> :
        ''
      }
    </div>
  );
};

SimulatePanel.propTypes = {
  feedback: PropTypes.object,
  orderSimulate: PropTypes.func.isRequired,
};

export default SimulatePanel;
