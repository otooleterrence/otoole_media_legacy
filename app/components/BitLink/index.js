import React from 'react';
import { Link } from 'react-router-dom';
// import pairit from 'icons/pairit';

const logo = require('icons/Pairit.svg');

import styles from './styles';

export default (props) => {

  const {linkTo, linkName, className} = props;

  return (
    <div className={className}>
      <Link to={linkTo} className={styles.links}>
        <img src={logo} className={styles.logos}/>
        {linkName}
      </Link>
    </div>

  );
};
