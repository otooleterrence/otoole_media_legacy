import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

export default (props) => {
  const { items } = props;
  return (
    <div className={styles.indexContainer}>
    {items.map((item, index) => (
        <div className={styles.item} key={`${index}-item.name`}>
          {item.name}
        </div>
      ))
    }
    </div>
  );
};
