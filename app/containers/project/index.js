import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import store from 'store';

import ImageProject from 'components/ImageProject';
import TitleBlock from 'components/TitleBlock';

import styles from './styles';
import def from '../home/index';

class projectContainer extends Component {

  typeCast(project) {
    switch (project.type) {
      case 'still':
        return (<ImageProject project={project} />);
        break;
      case 'three':
        return (<ThreeProject project={project} />);
        break;
      case 'dev':
        return (<DevProject project={project} />);
        break;
      default:
        return (<Redirect to="/" />);
        break;
    }
  }

  render() {
    const { projectName } = this.props.match.params;
    let project = {};
    store.projects.forEach( p => {
      if (p.name === projectName) {
        project = p;
      }
    });
    return (
      <div>
        <TitleBlock />
        {this.typeCast(project)}
        {/* <DescriptionBlock /> */}
      </div>
    );
  }
}

export default projectContainer;
