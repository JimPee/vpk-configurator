import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import featureStyle from './feature-style.css';
import CharSelect from '../dropdowns/char-select';

class PaletType extends Component {

  constructor() {
    super();
    this.paletTypeChange = this.paletTypeChange.bind(this);
    this.state = {
      paletType: '',
    };
  }

  paletTypeChange(val) {
    this.setState({ paletType: val });
  }

  render() {
    const { paletTypes, checkDropdowns, updateValue } = this.props;
    if (!paletTypes) {
      return null;
    }
    return (
			<div className={featureStyle.feature}>
				<div className={featureStyle.featureHeader}>
					PaletType
				</div>
				<div className={featureStyle.featureBody}>
					<CharSelect
						key={paletTypes.char}
						char={paletTypes}
						checkDropdowns={checkDropdowns}
						updateValue={updateValue}
					/>
				</div>
			</div>
    );
  }
}

PaletType.propTypes = {

};

export default PaletType;
