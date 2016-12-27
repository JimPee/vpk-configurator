import React, { PropTypes } from 'react';
import styles from './create-trigger.css';

const CreateTrigger = (props) => {
  const { orderCreate } = props;
  function handleClick() {
    orderCreate();
  }
  return (
    <button className={styles.trigger} type='button' onClick={handleClick} >Create order</button>
  );
};

CreateTrigger.propTypes = {
  orderCreate: PropTypes.func.isRequired,
};

export default CreateTrigger;
