import React from 'react';
import { Link } from 'react-router-dom';

import PairItLogo from '../../svgs/Pairit.svg';

import styles from './styles';

export default (props) => {

  // console.log('pairIt', pairItLogo);

  return (
    <div className={styles.row}>
      <div className={styles.oneThird}>
        <div className={styles.text} >
          <p>A GitHub-enabled remote pair programming application. Pair.it is a desktop app that uses Electron, react-redux, socket.io, WebRTC and other libraries to simplify remote collaboration. </p>
        </div>
        <div className={styles.link} >

        </div>
        <div className={styles.link} />
        <div className={styles.link} />
        <div className={styles.link} />
      </div>
      <div className={styles.twoThirds} >
        {/* <PairItLogo /> */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/sQqvEzpkZys"
          frameBorder= "0"
        >
        </iframe>
      </div>
    </div>

  );
};
