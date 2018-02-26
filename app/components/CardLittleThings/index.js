import React from 'react';
import { OutboundLink, event } from 'react-ga';
// import { Link } from 'react-router-dom';
import BitLink from 'components/BitLink';
import styles from './styles';

export default () => {
  const handleClick = () => {
    event({
      category: 'testing',
      action: 'clicked test button'
    });
  };

  return (
    <div className={styles.row}>
      <div className={styles.twoThirds}>
        <div className={styles.text} >
          <p>Sometimes the world begs to be represented. Sometimes it's cute, sometimes it's dumb, sometimes it's remarkable, sometimes it's exceedingly ordinary. All of these little things add up to make a modern life.</p>
        </div>
        <div className={styles.link} >
          <button onClick={handleClick} >log some event </button>
          <OutboundLink
            eventLabel="Outbound to example"
            to="http://www.example.com"
            target="_blank">
            My Link
          </OutboundLink>
        </div>
        <div className={styles.link} >
        second wrongle
        </div>

        {/* <BitLink className={styles.link} linkTo="/contact" linkName={'GitHub'} />
        <BitLink className={styles.link} linkTo="/contact" linkName={'Pair It'} />
        <BitLink className={styles.link} linkTo="/contact" linkName={'Fullstack'} />
        <BitLink className={styles.link} linkTo="/contact" linkName={'Pairit'} /> */}
      </div>
      <div className={styles.oneThird}>
        <BitLink className={styles.text} linkTo={'/about'} linkName={'Little Things'} />
        <div className={styles.linkWide} >
          Third wrongle
        </div>
      </div>
    </div>

  );
};
