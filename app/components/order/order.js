import React, { PropTypes } from 'react';
import SimulatePanel from './simulate-panel';
import CreatePanel from './create-panel';
import styles from './order.css';
import SimulateFeedback from './simulate-feedback';

const Order = (props) => {
  const { simulateMessages, createMessages, feedback, actions,
    showSimulate, showCreate, simulateIsLoading } = props;

  return (
    <div className='row'>
      <div className='col-md-12'>
        {
          showSimulate === true && showCreate === false ?
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
            orderCreate={actions.orderCreate}
            feedback={feedback} /> :
            ''
        }
        { simulateIsLoading && <div className={styles.loadingGif}/> }
        {
          feedback !== undefined && feedback.rate !== undefined && feedback.rate !== '' ?
          <SimulateFeedback rate={feedback.rate} /> :
          ''
        }
      </div>
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
  simulateIsLoading: PropTypes.bool.isRequired,
};

export default Order;
