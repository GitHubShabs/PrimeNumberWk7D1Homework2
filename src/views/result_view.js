// const PubSub = require('../helpers/pub_sub.js')

const ResultView = function() {



};

ResultView.prototype.displayResult = function (result) {
  const resultsElement = document.querySelector('#result')

  if (result == true) {
    resultsElement.textContent = `Yes! Its a prime number.`;
  } else {
    resultsElement.textContent = `No! Its not a prime number.`;
  }
};







module.exports = ResultView;
