import React, { PropTypes } from 'react';
import styles from './header.css';

const Header = () => {
  return (
    <div className={styles.container} >
      <img className={styles.image} src="http://www.vpkgroup.com/media/img/logo-vpk.png" />
    </div>
  );
};

export default Header;
