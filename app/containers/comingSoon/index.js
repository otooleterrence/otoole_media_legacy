import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from 'store/logo1.json';
import Header from 'components/Header';

import styles from './styles';

class comingSoonContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {}
    };

    return (
      <main className={styles['near-black']}>
        <Header />
          <Lottie
            options={defaultOptions}
          />
      </main>
    );
  }
}

export default comingSoonContainer;
