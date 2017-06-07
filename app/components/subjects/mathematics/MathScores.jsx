var React = require('react');
import * as Redux from 'react-redux';
import * as actions from 'actions'; 
import {Link} from 'react-router';

import User from 'User';
import MathTestList from "MathTestList";


export class MathScores extends React.Component {
  render () {
    return (

          <div className="page">
            <div className="container">
                <h2 className="page-header">Results</h2>
              <MathTestList />
              <hr/>
              <p><Link to="/">Take Another Test!</Link></p>
          </div>
      </div>
    );
  }
};

export default Redux.connect()(MathScores);
