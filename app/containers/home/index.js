import React, { Component } from 'react';
import axios from 'axios';

import styles from './styles';

class homeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: {},
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

  render() {
    return (
      <div>
        <h1>o'toole.<br />media</h1>
        <div className={styles.categories} >
          {this.state.categories.map((cat) => {
            return (
              <div key={cat} className={styles.category}>{cat}</div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default homeContainer;
