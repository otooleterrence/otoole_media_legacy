import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import NavButt from 'components/NavButt';
// import Indexer from 'components/Indexer';

// import styles from './styles';

class projectContainer extends Component {

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

  // componentDidMount() {
  //   axios.get('/elements.json')
  //     .then((res) => {
  //       const map = mapper(res.data.projects);

  //       this.setState({
  //         projects: map.projects,
  //         colors: map.colors,
  //       });
  //     });
  // }

  // clickButton(page, color) {
  //   return () => {
  //     this.setState({
  //       color,
  //     });
  //     console.log(`go to page /${page}`);
  //   };
  // }

  render() {
    const project = this.props.match.params.projectName;
    console.log('projectName', project);
    return (
      <div>
        <Link to="/">
          <h1>o'toole.<br />media</h1>
        </Link>

        {project}
      </div>
    );
  }
}

export default projectContainer;
