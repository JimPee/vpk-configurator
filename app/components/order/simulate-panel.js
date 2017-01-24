import React, { PropTypes } from 'react';
import SimulateTrigger from './simulate-trigger';

const SimulatePanel = (props) => {
  const { orderSimulate } = props;
  return (
    <div>
      <SimulateTrigger orderSimulate={orderSimulate} />
    </div>
  );
};

SimulatePanel.propTypes = {
  feedback: PropTypes.object,
  orderSimulate: PropTypes.func.isRequired,
};

export default SimulatePanel;
