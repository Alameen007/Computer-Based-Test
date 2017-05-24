import React from 'react';
import * as Redux from 'react-redux';

import Navigation from 'Navigation';
import User from 'User';
import Admin from 'Admin';



var Main = (props) => {
  return (
    <div>
      <Navigation/>
          {props.children}
    </div>
  );
}

module.exports = Main;
