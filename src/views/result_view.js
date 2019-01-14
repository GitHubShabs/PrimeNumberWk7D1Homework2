const PubSub = require('../helpers/pub_sub.js')

const ResultView = function() {



};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const result = event.detail;
    this.displayResult(result)
  })

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
