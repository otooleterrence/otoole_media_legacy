import React from 'react';

import styles from './styles';

export default (props) => {
  const { label, color, onClick } = props;
  return (
    <div
      className={styles[color] || styles.label}
      onClick={onClick} >
      {label}
    </div>
  );
};
