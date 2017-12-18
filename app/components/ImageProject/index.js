import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

export default (props) => {
  const { project } = props;

  return (
    <div>
      <img className={styles.image} src={project.mainImage} />
    </div>
  );
};
