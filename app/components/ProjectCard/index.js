import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

export default (props) => {
  const { projectName, onHover } = props;

  return (
    <div className={styles.cardContainer}>
      <h2>{projectName}</h2>
      <div className={styles.card} onMouseEnter={onHover()} />
    </div>
  );
};
