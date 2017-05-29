var React = require('react');
import * as Redux from 'react-redux';
import * as actions from 'actions';

import AddMathQuestion from "AddMathQuestion";
import MathList from "MathList";
import Result from 'Result';

export class Mathematics extends React.Component {
  render () {
    return (

          <div className="page">
            <div className="container">
              <div className="row">
                <h2 className="page-header">Mathematic <span className="pull-right"><AddMathQuestion /></span></h2>
            </div>
            <div className="row">
              <MathList />
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-4 resultB">
               <Result />
              </div>
           </div>
          </div>
      </div>
    );
  }
};

export default Redux.connect()(Mathematics);
