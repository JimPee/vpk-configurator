import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import styles from './char-select.css';

class CharSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getCorrectValue = this.getCorrectValue.bind(this);
    this.state = {
      value: this.getCorrectValue(props.char),
    };
  }

  getOptions(char) {
    return char.values.map(value => {
      return {
        label: value.desc,
        value: value.value,
      };
    });
  }

  getCorrectValue(char) {
    if (char === undefined) {
      return '';
    }
    if (char.value !== undefined && char.value !== '') {
      if (Array.isArray(char.value)) {
        if (char.value.length) {
          if (this.isMultiList(char)) {
            return char.value;
          }
          return char.value[0];
        }
        return '';
      }
      return char.value;
    }
    if (this.isMultiList(char)) {
      return char.default_val;
    }
    if (char.default_val.length) {
      return char.default_val[0];
    }
    return '';
  }

  hasError(char) {
    if (char.error && char.error === 'X') {
      return true;
    }
    return false;
  }

  handleChange(option) {
    let newValue = '';
    if (option) {
      if (option instanceof Array) {
        newValue = option.map(opt => opt.value);
      } else {
        newValue = option.value;
      }
    }
    this.setState({
      value: newValue,
    });
    this.props.updateValue(this.props.char.char, newValue);
    this.props.checkDropdowns();
  }

  isDisabled(char) {
    let counter = 0;
    char.values.forEach(value => {
      if (value.hide === undefined || value.hide === false) {
        counter++;
      }
    });
    if (counter === 0) {
      return true;
    }
    if (char.no_input === 'X') {
      return true;
    }
    return false;
  }

  isMultiList(char) {
    if (char.multilist && char.multilist === 'X') {
      return true;
    }
    return false;
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      value: this.getCorrectValue(newProps.char),
    });
  }

  render() {
    return (
      <div className={styles.feature}>
        <div className={styles.featureHeader}>
          {this.props.char.char_desc}
        </div>
        <div className={styles.featureBody}>
            <div className={this.hasError(this.props.char) ? styles.errorSelect : styles.select}>
              <Select
                options={this.getOptions(this.props.char)}
                onChange={this.handleChange}
                value={this.state.value}
                multi={this.isMultiList(this.props.char)}
                disabled={this.isDisabled(this.props.char)} />
            </div>
        </div>
      </div>
    );
  }
}

CharSelect.propTypes = {
  char: PropTypes.object.isRequired,
  updateValue: PropTypes.func,
  checkDropdowns: PropTypes.func,
};

export default CharSelect;
