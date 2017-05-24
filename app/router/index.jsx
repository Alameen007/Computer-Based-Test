import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import firebase from 'app/firebase/';
import Main from 'Main';
import User from 'User';
import Admin from 'Admin';
import Mathematics from 'Mathematics';


export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="admin" component={Admin} />
      <Route path="Mathematics" component={Mathematics} />
      <IndexRoute component={User} />
    </Route>
  </Router>
);
