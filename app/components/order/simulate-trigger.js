import React, { PropTypes } from 'react';
import styles from './simulate-trigger.css';

const SimulateTrigger = (props) => {
  const { orderSimulate } = props;
  function handleClick() {
    orderSimulate();
  }
  return (
    <button className={styles.trigger} type='button' onClick={handleClick} >Simulate order</button>
  );
};

SimulateTrigger.propTypes = {
  orderSimulate: PropTypes.func.isRequired,
};

export default SimulateTrigger;
