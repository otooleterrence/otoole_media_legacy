import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

export default (props) => {
  const { items } = props;
  return (
    <div className={styles.indexContainer}>
    {items.map((item, index) => (
        <div className={styles.item} key={`${index}-item.name`}>
          <Link to={`/${item.name}`} >
            <div className={styles.itemImg}>
              <div className={styles[item.color]}>
                <h3>{item.title}</h3>
                {item.description}
              </div>
              <img className={styles.image} src={item.thumbnailLink} />
            </div>
          </Link>
        </div>
      ))
    }
    </div>
  );
};
