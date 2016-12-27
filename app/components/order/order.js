import React, { PropTypes } from 'react';
import SimulatePanel from './simulate-panel';
import CreatePanel from './create-panel';
import styles from './order.css';

const Order = (props) => {
  const { simulateMessages, createMessages, feedback, actions,
    showSimulate, showCreate } = props;

  return (
    <div className={styles.container}>
    {
      showSimulate === true ?
      <SimulatePanel
        messages={simulateMessages}
        orderSimulate={actions.orderSimulate}
        feedback={feedback} /> :
        ''
    }
    {
      showCreate === true ?
      <CreatePanel
        messages={createMessages}
        orderCreate={actions.orderCreate} /> :
        ''
    }
    </div>
  );
};

Order.propTypes = {
  simulateMessages: PropTypes.array.isRequired,
  createMessages: PropTypes.array.isRequired,
  feedback: PropTypes.object,
  actions: PropTypes.object.isRequired,
  showSimulate: PropTypes.bool.isRequired,
  showCreate: PropTypes.bool.isRequired,
};

export default Order;
