import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

export default (props) => {
  return (
    <header className={styles.header}>
      {/* <nav className={styles.container} > */}
        <Link to="/">
          <h1>otoole.media</h1>
        </Link>
        <div>
          {/* <Link to="/contact" className={styles.links}>
            <h1>@</h1>
          </Link> */}
          <a href="mailto:terry@otoole.media">
            <h1>@</h1>
          </a>
        </div>
      {/* </nav> */}
    </header>
  );
};
