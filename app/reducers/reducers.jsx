var uuid = require('node-uuid');

export var mathematicsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MATH_QUESTION':
      return [
        ...state,
        action.mathQuestion
      ];
      case 'UPDATE_MATH_QUESTION':
        return state.map((mathQuestion) => {
          if (mathQuestion.id === action.id) {
            return {
              ...mathQuestion
            };
          } else {
            return mathQuestion;
          }
        });
    case 'ADD_MATHEMATICS':
      return [
        ...state,
        ...action.mathematics
      ];
    default:
      return state;
  }
};
