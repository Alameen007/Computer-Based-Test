var React = require('react');
var {connect} = require('react-redux');
import MathQuestion from 'MathQuestion';
import Result from 'Result';
var MathAPI = require('MathAPI');

export class MathList extends React.Component {
  render () {
  var {mathematics} = this.props;
  var renderMathematics = () => {
    var filteredMathematics = MathAPI.filterMathematics(mathematics);


    if (filteredMathematics.length === 0) {
      return (
            <h3 className="text-center">Loading...</h3>
        );
      }

    return filteredMathematics.map((mathQuestion) => {
      return (
        <MathQuestion key={mathQuestion.id} {...mathQuestion}/>
      );
    });
  };
  return (
      <div>
        {renderMathematics()}
      </div>
    )
  }
};

  export default connect(
    (state) => {
      return state;
    }
  )(MathList);
