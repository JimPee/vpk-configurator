import React, { Component, PropTypes } from 'react';
import featureStyle from './feature-style.css';
import Select from 'react-select';

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
    const { paletTypes } = this.props;
    return (
			<div className={featureStyle.feature}>
				<div className={featureStyle.featureHeader}>
					PaletType
				</div>
				<div className={featureStyle.featureBody}>
					<Select
            name="form-field-name"
            placeholder="Palet type"
            labelKey="desc"
            valueKey="value"
            value={this.state.paletType}
            options={paletTypes}
            onChange={ this.paletTypeChange }
					/>
				</div>
			</div>
    );
  }
}

PaletType.propTypes = {

};

export default PaletType;
