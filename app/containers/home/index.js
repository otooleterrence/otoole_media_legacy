import React, { Component } from 'react';
import axios from 'axios';

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
    };

  }

  componentDidMount() {
    axios.get('/elements.json')
    .then((res) => {
      const projects = res.data.projects;
      const categories = projects.map(project => project.type);
      const colors = projects.map(project => project.color);
      this.setState({
        projects,
        // categories,
        colors,
      });
    });
  }

  clickButton(page) {
    return () => console.log(`go to page /${page}`);
  }

  render() {
    const {projects, categories, colors} = this.state;
    return (
      <div>
        <h1>o'toole.<br />media</h1>
        <div className={styles.categories} >
          {categories.map((cat, index) => {
            return (
              <NavButt
                label={cat}
                color={colors[index]}
                key={cat}
                onClick={this.clickButton(cat)}
              />
            );
          })}
        </div>
        <Indexer items={projects}/>
      </div>
    );
  }
}

export default homeContainer;
