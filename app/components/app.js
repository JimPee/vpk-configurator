import React, { PropTypes } from 'react';
import DevTools from './dev-tools';
import styles from '../assets/css/global.css';

const App = (props) => (
  <div className={styles.app}>
    { props.children }
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
