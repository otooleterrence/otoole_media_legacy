import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import homeContainer from './containers/home';

import './styles';

render(
  <Router>
    <div>
      <Route path="/" component={homeContainer} />
    </div>
  </Router>,
  document.getElementById('appContainer')
);
