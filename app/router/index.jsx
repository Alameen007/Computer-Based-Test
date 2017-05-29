import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import firebase from 'app/firebase/';
import Main from 'Main';
import User from 'User';
import Admin from 'Admin';
import Mathematics from 'Mathematics';
import MathTest from 'MathTest';
import MathScores from 'MathScores';


export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="admin" component={Admin} />
      <Route path="Mathematics" component={Mathematics} />
      <Route path="MathTest" component={MathTest} />
      <Route path="MathScores" component={MathScores} />
      <IndexRoute component={User} />
    </Route>
  </Router>
);
