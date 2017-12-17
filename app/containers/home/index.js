import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import mapper from 'store/utils';

import NavButt from 'components/NavButt';
import Indexer from 'components/Indexer';

import styles from './styles';

class homeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: [],
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
      colors: [],
      color: 'white',
    };
  }

  componentDidMount() {
    axios.get('/elements.json')
    .then((res) => {
      const map = mapper(res.data.projects);

      this.setState({
        projects: map.projects,
        colors: map.colors,
      });
    });
  }

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
          <h1>o'toole.<br />media</h1>
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
        <Indexer items={projects} />
      </div>
    );
  }
}

export default homeContainer;
