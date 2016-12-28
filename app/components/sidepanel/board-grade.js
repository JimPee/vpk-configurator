import React, { Component, PropTypes } from 'react';
import featureStyle from './feature-style.css';

class BoardGrade extends Component {
  constructor() {
    super();
    // this.confirmPreviewPicture = this.confirmPreviewPicture.bind(this);
  }

  render() {
    return (
      <div className={featureStyle.feature}>
				<div className={featureStyle.featureHeader}>
					Board Grade
				</div>
				<div className={featureStyle.featureBody}>
					boardgrade
				</div>
      </div>
    );
  }
}


export default BoardGrade;
