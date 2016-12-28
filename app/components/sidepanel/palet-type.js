import React, { Component, PropTypes } from 'react';
import featureStyle from './feature-style.css';

class PaletType extends Component {

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
					PaletType
				</div>
				<div className={featureStyle.featureBody}>
					palet type
				</div>
			</div>
    );
  }
}

PaletType.propTypes = {

};

export default PaletType;
