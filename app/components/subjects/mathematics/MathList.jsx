var React = require('react');
var {connect} = require('react-redux');
import MathQuestion from 'MathQuestion';
var MathAPI = require('MathAPI');

export class MathList extends React.Component {
  render () {
  var {mathematics} = this.props;
  var renderMathematics = () => {
    var filteredMathematics = MathAPI.filterMathematics(mathematics);


    if (filteredMathematics.length === 0) {
      return (
        <div className="panel panel-success">
          <div className="text-center panel-body"><h3>Fetching Data...</h3></div>
        </div>
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
