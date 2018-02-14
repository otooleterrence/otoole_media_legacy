import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import homeContainer from './containers/home';
import projectContainer from './containers/project';

import './styles';

/**
 * For cleanliness the only url param will be to find a project page
 *    e.g. otoole.media/lanterns
 *         otoole.media/pair-it
 *         otoole.media/wright-window
 * More specific pages like for contact or about can be more complex
 *    e.g. otoole.media/contace/me
 * home will be the standard '/'
 *    e.g. otoole.media
 * project pages should really just focus on the media, not on the interface
 */

render(
  <Router>
    <div>
      <Route exact path="/" component={homeContainer} />
      <Route path="/contact" component={homeContainer} />
      <Route path="/about" component={homeContainer} />
    </div>
  </Router>,
  document.getElementById('appContainer')
);
