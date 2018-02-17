import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

export default (props) => {
  const { projectName, onHover } = props;

  console.log('props', props);

  return (
    <section className={styles.cardContainer}>
      <h2>{projectName}</h2>
      <div className={styles.card} onMouseEnter={onHover()}>
        {props.children}
      </div>
    </section>
  );
};
