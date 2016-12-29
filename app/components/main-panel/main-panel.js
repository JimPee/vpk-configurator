import React, { PropTypes } from 'react';
import styles from './main-panel.css';

const MainPanel = (props) => {
  const { boxHasScores, actions } = props;

  const handleSetBoxHasScores = (isScored) => {
    actions.setBoxHasScores(isScored);
    actions.checkDropdowns();
  };

  return (
		<div>
			<div className="row">
				<div className="col-md-3">
					<button className="configBtn">START NEW CONFIG</button>
				</div>
				<div className="col-md-6">
          <button
						className={styles.scoreBtn + ' ' + (boxHasScores && styles.selected)}
						onClick={handleSetBoxHasScores.bind(this, true)}>
						Scored</button>
					<button
						className={styles.scoreBtn + ' ' + (!boxHasScores && styles.selected)}
						onClick={handleSetBoxHasScores.bind(this, false)}>
						Not Scored</button>
				</div>
				<div className="col-md-3">
					<button className="simulateBtn">SIMULATE</button>
					<button className="orderBtn">ORDER</button>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 col-md-offset-3">
					<div className={styles.typeDropdown}>
						<p>Type:</p>
						<select>
							<option value="">female/male</option>
							<option value="">male/male</option>
							<option value="">female/female</option>
						</select>
					</div>
				</div>
			</div>
    </div>
  );
};

MainPanel.propTypes = {
  actions: PropTypes.object.isRequired,
  boxHasScores: PropTypes.bool.isRequired,
};

export default MainPanel;
