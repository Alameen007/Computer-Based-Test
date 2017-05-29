var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import Result from 'Result';



export class MathQuestion extends React.Component {

  onChange(e) {
    var {id, mathematics, mathQuestion, mathText, answers, current, dispatch} = this.props;
      var selected = e.target.value;
    $(":radio").change(function() {
      var names = {};
      var ans = {};
      $(':radio').each(function() {
        names[$(this).attr('name')] = true;
        ans = $(':radio:checked').value;
      });
      var count = 0;
      $.each(names, function() {
        count++;
      });
      if ($(':radio:checked').length === count) {
        $( "#vResult" ).prop( "disabled", false );
        if (selected == current) {
          console.log(selected);
        } else {
          console.log("you failed");
        }

      }
   });
  }

    render(){
        var {id, mathematics, mathQuestion, mathText, answers, dispatch} = this.props;
        return(
            <div className="well">
                 <h3>{mathText}</h3>
                <hr />
                <form className="form">
                <ul className="list-group">
                    {
                        answers.map(answer => {
                            return <li className="list-group-item lists" key={answer.id}>
                                {answer.id} <input type="radio" name={id}
                                                   onChange={this.onChange.bind(this)} value={answer.id}/>  {answer.text}</li>
                        })
                    }
                </ul>
                </form>
            </div>
        )
    }
}

export default connect()(MathQuestion);
