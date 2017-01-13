import React, { Component, PropTypes } from 'react';
import styles from './char-input.css';

class CharInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getCorrectValue = this.getCorrectValue.bind(this);
    this.state = {
      value: this.getCorrectValue(props.char),
    };
  }
  componentWillReceiveProps(nextProps) {
    this.state = {
      value: this.getCorrectValue(nextProps.char),
    };
  }
  getCorrectValue(char) {
    if (char === undefined) {
      return '';
    }

    if (char.value !== undefined && char.value !== '') {
      if (Array.isArray(char.value)) {
        if (char.value.length === 0) {
          return '';
        }
        return char.value[0];
      }
      return char.value;
    }

    if (Array.isArray(char.default_val)) {
      if (char.default_val.length === 0) {
        return '';
      }
      return char.default_val[0].replace(/,/, '.').match(/[0-9.,]*/);
    }
    return char.default_val.replace(/,/, '.').match(/[0-9.,]*/);
  }

  handleChange(event) {
    const newValue = event.target.value;
    this.setState({
      value: newValue,
    });
  }
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      const newValue = event.target.value;
      this.props.updateValue(this.props.char.char, newValue);
      this.props.checkDropdowns();
    }
  }
  handleBlur(event) {
    const newValue = event.target.value;
    this.props.updateValue(this.props.char.char, newValue);
    this.props.checkDropdowns();
  }
  getType(format) {
    if (format === 'NUM') {
      return 'number';
    }
    return 'text';
  }
  getPlaceholder(format) {
    if (format === 'NUM') {
      return 'Please enter a number';
    }
    return 'Please enter a value';
  }

  isDisabled() {
    if (this.props.char.no_input === 'X') {
      return true;
    }
    return false;
  }

  hasError(char) {
    if (char.error && char.error === 'X') {
      return true;
    }
    return false;
  }
  // TODO add validation, check length and decimals
  render() {
    const headerStyle = {
      backgroundColor: '#979797',
    };

    if (!!this.props.char.value) {
      headerStyle.backgroundColor = '#005fab';
    }

    return (
      <div className={styles.feature}>
        <div className={styles.featureHeader} style={ headerStyle }>
          {this.props.char.char_desc}
        </div>
        <div className={styles.featureBody}>
          <input
            disabled={this.isDisabled()}
            className={this.hasError(this.props.char) ? styles.errorInput : styles.input}
            type={this.getType(this.props.char.format)}
            value={this.state.value}
            onBlur={(event) => { this.handleBlur(event); }}
            onChange={this.handleChange}
            onKeyPress={(event) => { this.handleKeyPress(event); }}
            placeholder={this.getPlaceholder(this.props.char.format)}
          />
        </div>
      </div>
    );
  }
}

CharInput.propTypes = {
  char: PropTypes.object.isRequired,
  checkDropdowns: PropTypes.func,
  updateValue: PropTypes.func,
};

export default CharInput;
