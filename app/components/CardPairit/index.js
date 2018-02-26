import React from 'react';
import { event } from 'react-ga';
import YouTube from 'react-youtube';
import BitLink from 'components/BitLink';
import styles from './styles';

export default () => {

  const handlePlay = () => {
    event({
      category: 'video',
      action: 'played Pair.it video',
    });
  };

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
        <YouTube
          videoId="sQqvEzpkZys"
          className={styles.video}
          onPlay={handlePlay}
        />
      </div>
    </div>

  );
};
