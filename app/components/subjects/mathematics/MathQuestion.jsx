var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');



export class MathQuestion extends React.Component {
  onChange(e){

        const {setCurrent, setScore ,mathQuestion, mathText, answers } = this.props;
        let selected = e.target.value;
        if(selected == question.correct){
            setScore(this.props.score + 1);
            setCurrent(this.props.current + 1);
            return;
        }else{
            setCurrent(this.props.current + 1);
            return;
        }
    }
    render(){
        var {id, mathematics, mathQuestion, mathText, answers, dispatch} = this.props;
        return(
            <div className="well">
                 <h3>{mathText}</h3>
                <hr />
                <ul className="list-group">
                    {
                        answers.map(answer => {
                            return <li className="list-group-item" key={answer.id}>
                                {answer.id} <input type="radio" name={id}
                                                  onChange={this.onChange.bind(this)} value={answer.id}/>  {answer.text}</li>
                        })
                    }
                </ul>

            </div>            
        )
    }
}

export default connect()(MathQuestion);
