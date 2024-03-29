import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import ReactGA from 'react-ga';
// import homeContainer from './containers/home';
import comingSoon from './containers/comingSoon';
import createHistory from 'history/createBrowserHistory';
import { gaId } from 'config';

import './styles';

ReactGA.initialize(gaId); // initialize google analytics
ReactGA.pageview(window.location.pathname);

const history = createHistory(); // must use history and listener for ga
history.listen((location) => {
  ReactGA.pageview(location.pathname);
});

/**
 * For cleanliness the only url param will be to find a project page
 *    e.g. otoole.media/lanterns
 *         otoole.media/pair-it
 *         otoole.media/wright-window
 * home will be the standard '/'
 *    e.g. otoole.media
 * project pages should really just focus on the media, not on the interface
 */

render(
  <Router history={history}>
    <Switch>
      {/* <Route exact path="/" component={homeContainer} /> */}
      <Route exact path="/coming-soon" component={comingSoon} />
      {/* <Route path="/contact" component={homeContainer} />
      <Route path="/about" component={homeContainer} /> */}
      {/* <Route path="/*" render={() => ()} /> */}

      <Redirect to="/coming-soon" />
    </Switch>
  </Router>,
  document.getElementById('appContainer')
);
