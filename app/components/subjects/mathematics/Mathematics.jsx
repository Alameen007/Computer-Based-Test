var React = require('react');
import * as Redux from 'react-redux';
import * as actions from 'actions';

import AddMathQuestion from "AddMathQuestion";
import MathList from "MathList";

export class Mathematics extends React.Component {
  render () {
    return (
      <div className="row">
          <div className="page">
            <h2 className="page-header">Mathematic <span className="pull-right"><AddMathQuestion /></span></h2>
            <MathList />
              <hr/>
              <button type="button" className="btn btn-info">View Results</button>
          </div>
      </div>
    );
  }
};

export default Redux.connect()(Mathematics);
