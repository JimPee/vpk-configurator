import React, { PropTypes } from 'react';
import styles from './overview.css';

const Overview = () => {
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

export default Overview;
