import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import store from 'store';

import NavButt from 'components/NavButt';
import Indexer from 'components/Indexer';

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

  // componentDidMount() {
  //   this.setState({
  //     projects: store.projects,
  //     colors: store.colors,
  //   });
  // }

  clickButton(page, color) {
    return () => {
      this.setState({
        color,
      });
      console.log(`go to page /${page}`);
    };
  }

  render() {
    const {projects, categories, colors, color} = this.state;
    return (
      <div className={styles[color]}>
        <Link to="/">
          <h1>o'toole.media</h1>
        </Link>
        <div className={styles.categories} >
          {categories.map((cat, index) => {
            return (
              <NavButt
                label={cat}
                color={colors[index]}
                key={cat}
                onClick={this.clickButton(cat, colors[index] || 'white')}
              />
            );
          })}
        </div>
        <Link to="contact/me">
          contact
        </Link>
        <Indexer items={projects} />
      </div>
    );
  }
}

export default homeContainer;
