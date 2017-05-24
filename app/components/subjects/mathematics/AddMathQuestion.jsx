var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class AddMathQuestion extends React.Component{
  handleSubmit (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var questionText = this.refs.questionText.value;
    var answerA = this.refs.answerA.value;
    var answerB = this.refs.answerB.value;
    var answerC = this.refs.answerC.value;
    var answerD = this.refs.answerD.value;
    var correct = this.refs.correct.value;


    if (questionText.length && answerA.length && answerB.length && answerC.length && answerD.length && correct.length > 0) {
      dispatch(actions.startAddMathQuestion(questionText, answerA, answerB, answerC, answerD, correct));
      $("[data-dismiss=modal]").trigger({ type: "click" });
      this.refs.questionText.value = '';
      this.refs.answerA.value = '';
      this.refs.answerB.value = '';
      this.refs.answerC.value = '';
      this.refs.answerD.value = '';
      this.refs.correct.value = '';
    } else {
      this.refs.questionText.focus();
    }
  }
  render (){
    return (

      <div>
        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#mathModal">Add Question</button>

          <div className="modal fade" id="mathModal" role="dialog">
      <div className="modal-dialog">


        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">Add a Question</h4>
          </div>
          <div className="modal-body">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>Question
                  <input type="text" ref="questionText"/>
              </label>
              <div className="row">
                <div className="col-md-6">
                  <label>Answer A
                    <input type="text" ref="answerA"/>
                  </label>
                </div>
                <div className="col-md-6">
                  <label>Answer B
                    <input type="text" ref="answerB"/>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Answer C
                    <input type="text" ref="answerC"/>
                  </label>
                </div>
                <div className="col-md-6">
                  <label>Answer D
                    <input type="text" ref="answerD"/>
                  </label>
                </div>
              </div>

              <label>Correct Answer a, b, c or d
                <input type="text" ref="correct"/>
              </label>
              <button className="button expanded" >Add Question</button>
            </form>
          </div>

        </div>

      </div>
    </div>



      </div>
    );
  }
};

export default connect()(AddMathQuestion);
