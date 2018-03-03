import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as animationData from 'store/logo1.json';
import Header from 'components/Header';

import styles from './styles';

class homeContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // const {projects, categories, colors, color} = this.state;

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        // preserveAspectRatio: xMidYMid slice
      }
    };

    // TODO: main cannot rerender the entire page when the color changes
    return (
      <main className={styles['dark-gray']}>
        <Header />
        <Lottie
          options={defaultOptions}
        />
      </main>
    );
  }
}

export default homeContainer;
