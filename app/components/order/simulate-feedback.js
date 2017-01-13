import React, { PropTypes } from 'react';
import styles from './simulate-feedback.css';

const SimulateFeedback = (props) => {
  const { rate } = props;
  return (
    <p className={styles.feedback}>Feedback: {rate}</p>
  );
};

SimulateFeedback.propTypes = {
  rate: PropTypes.string.isRequired,
};

export default SimulateFeedback;
