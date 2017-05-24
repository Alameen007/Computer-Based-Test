import React from 'react';
import * as Redux from 'react-redux';
import {Link, IndexLink} from 'react-router';

export class Navigation extends React.Component{
  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Computer Based Test
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link">User</IndexLink>
            </li>
            <li>
              <Link to="/admin" activeClassName="active-link">Admin</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">

          </ul>
        </div>
      </div>
    );
  }
};

export default Redux.connect()(Navigation);
