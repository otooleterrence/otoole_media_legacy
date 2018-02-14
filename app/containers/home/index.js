import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from 'store';

import Header from 'components/Header';
import ProjectCard from 'components/ProjectCard';

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
    return () => {
      this.setState({
        color,
      });
    };
  }

  render() {
    const {projects, categories, colors, color} = this.state;
    return (
      <div className={styles[color]}>
        <Header onHover={() => this.setColor('white')} />
        <div className={styles['xl-container']}>
          <ProjectCard projectName={'Little Things'} onHover={() => this.setColor('yellow')} />
          <ProjectCard projectName={'Pair.it'} onHover={() => this.setColor('lime')} />
          <ProjectCard projectName={'Three.js Talk'} onHover={() => this.setColor('red')} />
          <ProjectCard projectName={'Renderings and Drawings'} onHover={() => this.setColor('orange')} />
        </div>
      </div>
    );
  }
}

export default homeContainer;
