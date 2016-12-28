import React, { PropTypes } from 'react';
import styles from './preview.css';

const Preview = (props) => {
  const { actions } = props;
  return (
    <div>
			<div className={styles.previewImg}></div>
    </div>
  );
};

Preview.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default Preview;
