var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import Result from 'Result';



export class Scores extends React.Component {
    render(){
        var {id, mathematics, mathQuestion, mathText, answers, correct, dispatch} = this.props;
        var correctAns = correct.toUpperCase();
        return(
            <div className="well">
                 <h3>{mathText}</h3>
                <hr />
                <ul className="list-group">
                    {
                        answers.map(answer => {
                            return <li className="list-group-item lists" key={answer.id}>
                                {answer.id}.  {answer.text}</li>
                        })
                    }
                </ul>
                <h5>The Correct Answer is: <span className="correct">{correctAns}</span></h5>
            </div>
        )
    }
}

export default connect()(Scores);
