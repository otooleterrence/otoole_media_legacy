import React from 'react';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import classNames from 'classnames';
import icons from 'icons';

import styles from './styles';

export default (props) => {

  const {linkTo, linkName, icon, className} = props;

  return (
    <div className={classNames(styles.container, className)}>
    {
      linkTo.charAt(0) === '/' ?
      <Link to={linkTo} className={styles.links}>
        {icons[icon] && <img src={icons[icon]} className={styles.logos} />}
        {linkName}
      </Link>
      :
      <OutboundLink
        eventLabel={`Outbound Link to ${linkName}`}
        to={linkTo}
        target="_blank"
        // className={styles.container}
      >
        {icons[icon] && <img src={icons[icon]} className={styles.image} />}
        {/* {linkName} */}
        <div className={styles.overlay} />
        <div className={styles.text}>{linkName}</div>
      </OutboundLink>
    }
    </div>

  );
};
