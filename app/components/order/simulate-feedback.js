import React, { PropTypes } from 'react';
import styles from './simulate-feedback.css';

const SimulateFeedback = (props) => {
  const { rate } = props;
  return (
    <h1 className={styles.feedback}>{rate}</h1>
  );
};

SimulateFeedback.propTypes = {
  rate: PropTypes.string.isRequired,
};

export default SimulateFeedback;
