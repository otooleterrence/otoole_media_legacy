import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import comingSoon from './containers/comingSoon';
import createHistory from 'history/createBrowserHistory';
// import logo from './logo.svg';
// import './App.css';


const history = createHistory(); // must use history and listener for ga
// history.listen((location) => {
//   ReactGA.pageview(location.pathname);
// });

class App extends Component {
  render() {
    return (
      <Router history={history}>
      {/* <Router > */}
        <Switch>
          <Route exact path="/coming-soon" component={comingSoon} />
          <Redirect to="/coming-soon" />
        </Switch>
      </Router>
    );
  }
}

export default App;
