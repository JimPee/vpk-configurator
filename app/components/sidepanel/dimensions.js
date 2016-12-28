import React, { Component, PropTypes } from 'react';
import featureStyle from './feature-style.css';

class Dimensions extends Component {

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
					Dimensions
				</div>
				<div className={featureStyle.featureBody}>
					dimensions
				</div>
			</div>
    );
  }
}

Dimensions.propTypes = {

};

export default Dimensions;
