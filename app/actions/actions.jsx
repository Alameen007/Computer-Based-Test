import firebase, {firebaseRef} from 'app/firebase/';


export var addMathQuestion = (mathQuestion) => {
  return {
    type: 'ADD_MATH_QUESTION',
    mathQuestion
  };
};

export var startAddMathQuestion = (mathText, answerA, answerB, answerC, answerD, correct) => {
  return (dispatch, getState) => {
    var mathQuestion = {
      mathText,
      answers: [
        {
             id:'A',
            text: answerA
        },
        {
            id:'B',
            text: answerB
        },
        {
            id:'C',
            text: answerC
        },
        {
            id:'D',
            text: answerD
        }
      ],
      correct
    };
    var mathQuestionRef = firebaseRef.child('subjects/mathematics').push(mathQuestion);

    return mathQuestionRef.then(() => {
      dispatch(addMathQuestion({
        ...mathQuestion,
        id: mathQuestionRef.key
      }));
    });
  };
};

export var addMathematics = (mathematics) => {
  return {
    type: 'ADD_MATHEMATICS',
    mathematics
  };
};

export var startAddMathematics = () => {
  return (dispatch, getState) => {
    var mathematicsRef = firebaseRef.child('subjects/mathematics');

    return mathematicsRef.once('value').then((snapshot) => {
      var mathematics = snapshot.val() || {};
      var parsedMathematics = [];

      Object.keys(mathematics).forEach((mathQuestionId) => {
        parsedMathematics.push({
          id: mathQuestionId,
          ...mathematics[mathQuestionId]
        });
      });

      dispatch(addMathematics(parsedMathematics));
    });
  };
};

export var updateMathQuestion = (id, mathQuestions) => {
  return {
    type: 'UPDATE_MATH_QUESTION',
    id
  };
};

export var startToggleQuestion = (id) => {
  return (dispatch, getState) => {
    var mathQuestionRef = firebaseRef.child(`subjects/mathematics/${id}`);
    var updates = {

    };
    return mathQuestionRef.update(updates).then(() => {
      dispatch(updateMathQuestion(id, updates));
    });
  };
};
