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
        <BitLink className={styles.link} linkTo="https://github.com/jjdeehan/pair-it-app" icon={'github'} linkName={'View on GitHub'} />
        <BitLink className={styles.link} linkTo="http://pair-it.herokuapp.com/" icon={'pairIt'} linkName={'Download Pair It'} />
        <BitLink className={styles.link} linkTo="https://www.fullstackacademy.com/" icon={'fullStack'} linkName={'Fullstack'} />
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
