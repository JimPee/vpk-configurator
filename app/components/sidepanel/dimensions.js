import React, { Component, PropTypes } from 'react';
import CharInput from '../dropdowns/char-input';

class Dimensions extends Component {
  render() {
    const { width, length, checkDropdowns, updateValue } = this.props;
    if (!width || !length) {
      return null;
    }
    return (
			<div>
        <CharInput
          key={width.char}
          char={width}
          checkDropdowns={checkDropdowns}
          updateValue={updateValue}
        />
        <CharInput
            key={length.char}
            char={length}
            checkDropdowns={checkDropdowns}
            updateValue={updateValue}
          />
			</div>
    );
  }
}

Dimensions.propTypes = {
  checkDropdowns: PropTypes.func,
  updateValue: PropTypes.func,
  width: PropTypes.object,
  length: PropTypes.object,
};

export default Dimensions;
