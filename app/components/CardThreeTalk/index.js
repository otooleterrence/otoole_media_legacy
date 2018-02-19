import React from 'react';
// import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import BitLink from 'components/BitLink';
import styles from './styles';

export default (props) => {

  return (
    <div className={styles.row}>
      <div className={styles.oneThird}>
        <div className={styles.text} >
          <p>Terry walks you through the five essential components of constructing a web - based interactive 3D environment.Terry demonstrates the power of using WebGL and discusses how the most basic aspects of rendering occur, and demonstrates how the Three.js library allows you to harness these rendering capabilities. </p>
        </div>
        <BitLink className={styles.link} linkTo="/contact" linkName={'Three.js'} />
        <BitLink className={styles.link} linkTo="/contact" linkName={'My Logo'} />
        <BitLink className={styles.link} linkTo="/contact" linkName={'Fullstack'} />
        <BitLink className={styles.link} linkTo="/contact" linkName={'more examples'} />
      </div>
      <div className={styles.twoThirds} >
        <YouTube
          videoId= "O18Dq-QcfEE"
          className= {styles.video}
        />
        {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/O18Dq-QcfEE"
          frameBorder="0"
        >
        </iframe> */}
      </div>
    </div>

  );
};
