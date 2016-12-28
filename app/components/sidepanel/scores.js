import React, { Component, PropTypes } from 'react';
import featureStyle from './feature-style.css';

class Scores extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    //const { } = this.props;
    return (
			<div className={featureStyle.feature}>
				<div className={featureStyle.featureHeader}>
					Scores
				</div>
				<div className={featureStyle.featureBody}>
					scores
				</div>
			</div>
    );
  }
}

Scores.propTypes = {

};

export default Scores;
