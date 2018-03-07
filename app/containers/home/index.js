import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from 'store';

import Header from 'components/Header';
import Footer from 'components/Footer';
import ProjectCard from 'components/ProjectCard';
import CardPairIt from 'components/CardPairit';
import CardLittleThings from 'components/CardLittleThings';
import CardThreeTalk from 'components/CardThreeTalk';

import styles from './styles';

class homeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: store.projects,
      categories: [
        'dev',
        'art',
        'code',
        'ux',
        '3d',
        'game',
        'motion',
        'arch',
      ],
      colors: store.colors,
      color: 'white',
    };
  }


  setColor(color) {
    // return () => {
    //   this.setState({
    //     color,
    //   });
    // };
  }

  render() {
    const {projects, categories, colors, color} = this.state;

    // TODO: main cannot rerender the entire page when the color changes
    return (
      <main className={styles[color]}>
        <Header onHover={() => this.setColor('bg-gray')} />
        <article className={styles['xl-container']}>
          <ProjectCard projectName={'Little Things'} onHover={() => this.setColor('yellow')}>
            <CardLittleThings />
          </ProjectCard>
          <ProjectCard projectName={'Pair.it'} onHover={() => this.setColor('lime')}>
            <CardPairIt />
          </ProjectCard>
          <ProjectCard projectName={'Essential Three.js'} onHover={() => this.setColor('red')}>
            <CardThreeTalk />
          </ProjectCard>
          <ProjectCard projectName={'Renderings and Drawings'} onHover={() => this.setColor('orange')}>
            <CardPairIt />
          </ProjectCard>
        </article>
        <Footer />
      </main>
    );
  }
}

export default homeContainer;
