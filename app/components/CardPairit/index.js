import React from 'react';
// import { Link } from 'react-router-dom';
import BitLink from 'components/BitLink';
import styles from './styles';

export default (props) => {

  return (
    <div className={styles.row}>
      <div className={styles.oneThird}>
        <div className={styles.text} >
          <p>A GitHub-enabled remote pair programming application. Pair.it is a desktop app that uses Electron, react-redux, socket.io, WebRTC and other libraries to simplify remote collaboration. </p>
        </div>
        <BitLink className={styles.link} linkTo="/contact" linkName={'GitHub'} />
        <BitLink className={styles.link} linkTo="/contact" linkName={'Pair It'} />
        <BitLink className={styles.link} linkTo="/contact" linkName={'Fullstack'} />
        <BitLink className={styles.link} linkTo="/contact" linkName={'Pairit'} />
      </div>
      <div className={styles.twoThirds} >
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
