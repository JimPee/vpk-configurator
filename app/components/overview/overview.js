import React, { PropTypes } from 'react';
import styles from './overview.css';

const Overview = (props) => {
  const { actions } = props;
  return (
		<div className={styles.overview}>
			<div className={styles.overviewHeader}>
				Overview
			</div>
			<div className={styles.overviewBody}>
				<p>Type: Pallet</p>
				<p>Dimensions: 20x50</p>
				<p>Test: lorem ipsum</p>
			</div>
		</div>
  );
};

Overview.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default Overview;
