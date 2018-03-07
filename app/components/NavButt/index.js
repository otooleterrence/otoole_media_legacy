import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles';

export default (props) => {
  const { label, color, onClick } = props;
  return (
    <Link
      to={`/${label}`}
      className={styles[color] || styles.label}
      onClick={onClick} >
      {label}
    </Link>
  );
};
