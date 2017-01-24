import React, { Component } from 'react';
import { init } from './object-renderer';
import styles from './preview.css';

class Preview extends Component {
  componentDidMount() {
    init();
  }
  render() {
    return (
      <div id="preview" className={styles.preview}>
      </div>
    );
  }
}

export default Preview;
