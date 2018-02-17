import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

export default (props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.container} onMouseEnter={props.onHover()}>
        <Link to="/">
          <h1>otoole.media</h1>
        </Link>
        <div>
          <Link to="/about" className={styles.links}>
            about
          </Link>
          <Link to="/contact" className={styles.links}>
            contact
          </Link>
        </div>
      </nav>
    </header>
  );
};
