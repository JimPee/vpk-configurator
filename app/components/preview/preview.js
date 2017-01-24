import React, { Component } from 'react';
import { init } from './object-renderer';
import styles from './preview.css';

class Preview extends Component {
  componentDidMount() {
    init();
  }
  render() {
    return (
      <div className={styles.preview}>
        <canvas id="preview"></canvas>
      </div>
    );
  }
}

export default Preview;
