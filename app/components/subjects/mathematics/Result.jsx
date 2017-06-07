var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import MathQuestion from 'MathQuestion';

export class Result extends React.Component {

// var selected = e.target.value;
getScore(e) {
  e.preventDefault();
  var {id, mathematics, mathQuestion, mathText, answers, dispatch} = this.props;
  var answersList = [];
  $(".form").each(function(){
    var answer = $(':radio:checked').value;

    if (answer !== undefined) {
        answersList.push({
          answer: answer
        });
      }
console.log(answersList);
  });

}
  render() {
    var {id, mathematics, mathQuestion, mathText, answers, dispatch} = this.props;
    return (
      <div >
        <form onSubmit={this.getScore.bind(this)}>
          <button id="vResult" className="button expanded resultB"  disabled>View Results<ebuttonw
        </form> Result/>
      </div>
    )
  }
}

export default connect()(Result);
