import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

export default () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.container}>
        <div>
          <Link to="/about" className={styles.links}>
            about
          </Link>
          <Link to="/contact" className={styles.links}>
            contact
          </Link>
        </div>
        <div>Designed and built by Terry, 2018.</div>
      </nav>
    </footer>
  );
};
