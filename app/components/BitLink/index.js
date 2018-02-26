import React from 'react';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import icons from 'icons';

import styles from './styles';

export default (props) => {

  const {linkTo, linkName, icon, className} = props;

  return (
    <div className={className}>
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
        target="_blank">
        {icons[icon] && <img src={icons[icon]} className={styles.logos} />}
        {linkName}
      </OutboundLink>
    }
    </div>

  );
};
