var React = require('react');
var {connect} = require('react-redux');
import {Link} from 'react-router';
var actions = require('actions');

import MathQuestion from 'MathQuestion';

export class Result extends React.Component {

// var selected = e.target.value;

  render() {
    var {id, mathematics, mathQuestion, mathText, answers, dispatch} = this.props;
    return (
      <div >

        <Link to="/MathScores">  <button id="vResult" className="button expanded resultB"  disabled>View Result</button></Link>
      </div>
    )
  }
}

export default connect()(Result);
