import React, { Component } from 'react';
// import Lottie from 'react-lottie';
// import { Helmet } from 'react-helmet';
// import * as animationData from 'store/logo1.json';
import Header from '../../components/Header';

import styles from './styles.scss';

class comingSoonContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // const defaultOptions = {
    //   loop: true,
    //   autoplay: true,
    //   animationData: animationData,
    //   rendererSettings: {}
    // };

    return (
      <main className={styles['near-black']}>
        {/* <Helmet
          title="Coming Soon"
          meta={[
            { name: 'author', content: 'Terry' },

            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: 'otoole.media' },
            { name: 'twitter:creator', content: '@pterryodactyl' },
            { name: 'twitter:title', content: 'Coming Soon' },
            { name: 'twitter:image', content: 'http://www.otoole.media/images/preview.png' },

            { property: 'og:title', content: 'Coming Soon' },
            { property: 'og:site_name', content: 'otoole.media' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'http://www.otoole.media/coming-soon/' },
            { property: 'og:description', content: 'Coming Soon' },
            { property: 'og:image', content: 'http://www.otoole.media/images/preview.png' },
            { property: 'og:site_name', content: 'otoole media' },
          ]}
        /> */}
        <Header />
        {/* <Lottie
          options={defaultOptions}
        /> */}
      </main>
    );
  }
}

export default comingSoonContainer;
