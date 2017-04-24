import React, { Component, PropTypes } from 'react';
import { init } from './object-renderer';
import styles from './preview.css';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.getCorrectValue = this.getCorrectValue.bind(this);
  }

  componentDidMount() {
    //init();
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
    // let fefcoSheetText = '';
    // for (var i = 0; i < values.length; i++) {
    //   if (values[i].char === 'FEFCO_SHEET') {
    //     switch (this.getCorrectValue(values[i])) {
    //       case '800':
    //         fefcoSheetText = 'Sheet not scored';
    //         init(0)
    //         break;
    //       case '801':
    //         fefcoSheetText = 'Sheet has 1 score';
    //         init(1);
    //         break;
    //       case '802':
    //         fefcoSheetText = 'Sheet has 2 scores';
    //         break;
    //       case '803':
    //         fefcoSheetText = 'Sheet has 3 scores';
    //         break;
    //       case '809':
    //         fefcoSheetText = 'Sheet scores are manually assigned';
    //         break;
    //       default:
    //     }
    //   }
    // }
    return (
      <div className={styles.preview}>
      </div>
    );
  }
}

Preview.propTypes = {
  dropdowns: PropTypes.array,
};

export default Preview;
