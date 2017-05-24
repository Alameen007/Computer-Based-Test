var $ = require('jquery');

module.exports = {
  filterMathematics: function (mathematics) {
    var filteredMathematics = mathematics;


    filteredMathematics.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredMathematics;
  }
};
