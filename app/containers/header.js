import React, { PropTypes } from 'react';
import styles from './header.css';

const Header = () => {
  return (
    <div className={styles.container} >
      <img className={styles.image} src="http://www.vpkgroup.com/media/img/logo-vpk.png" />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>VPK Configurator</h1>
      </div>
      <div className={styles.extraContainer}>

      </div>
    </div>
  );
};

export default Header;
