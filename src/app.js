const FormView = require('./views/form_view.js')
const ResultView = require('./views/result_view.js')
const PrimeChecker = require('./models/prime_num_decider.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const form_view = new FormView();
  form_view.bindEvents();

  const primeNumber = new PrimeChecker();
  primeNumber.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();




});
