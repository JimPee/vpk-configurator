import React, { Component, PropTypes } from 'react';
import styles from './overview.css';

class Overview extends Component {

  constructor(props) {
    super(props);
    this.getCorrectValue = this.getCorrectValue.bind(this);
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

  render() {
    const values = this.props.dropdowns;

    return (
      <div className={styles.overview}>
        <div className={styles.overviewHeader}>
          Overview
        </div>
        <div className={styles.overviewBody}>
          {
            values.map((value, idx) => {
              return (
                value && <div key={idx}> { value.char_desc}: {this.getCorrectValue(value) ? this.getCorrectValue(value) : '' }</div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

Overview.propTypes = {
  dropdowns: PropTypes.array,
};

export default Overview;
