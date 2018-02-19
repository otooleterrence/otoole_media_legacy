import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

export default (props) => {

  const {linkTo, linkName, logo, className} = props;

  return (
    <div className={className}>
      <Link to={linkTo} className={styles.links}>
        {linkName}
      </Link>
    </div>

  );
};
