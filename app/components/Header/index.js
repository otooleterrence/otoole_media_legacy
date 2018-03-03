import React from 'react';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';

// import { github } from 'icons';
import icons  from 'icons';
// console.log('github', github);
// console.log('icons', icons);


import styles from './styles';

export default (props) => {
  return (
    <header className={styles.header}>
      {/* <nav className={styles.container} > */}
        <Link to="/">
          <h1>otoole.media</h1>
        </Link>
        <nav className={styles.navLinks}>
          <a href="mailto:terry@otoole.media" className={styles.mailLink}>@</a>
          <OutboundLink
            eventLabel={`Outbound Link to github`}
            to="https://github.com/otooleterrence"
            target="_blank"
          >
            <img src={icons.github} className={styles.image} />
          </OutboundLink>
          <OutboundLink
            eventLabel={`Outbound Link to github`}
            to="www.linkedin.com/in/otooleterrence"
            target="_blank"
          >
            <img src={icons.linkedin} className={styles.image} />
          </OutboundLink>
          <OutboundLink
            eventLabel={`Outbound Link to github`}
            to="https://twitter.com/pterryodactyl"
            target="_blank"
          >
            <img src={icons.twitter} className={styles.image} />
          </OutboundLink>
        </nav>
    </header>
  );
};
