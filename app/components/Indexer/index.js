import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

export default (props) => {
  const { items } = props;
  return (
    <div className={styles.indexContainer}>
    {items.map((item, index) => (
        <div className={styles.item} key={`${index}-item.name`}>
          <div className={styles[item.color]}>
            {item.name}
          </div>
        </div>
      ))
    }
    </div>
  );
};
