var parseNumbers = require('./parseNumbers.js');

function validateNumbers(argv) {
  var resultValue;
  if ((argv.v % 1) === 0) {
    if (parseInt(argv.v) > 0 && parseInt(argv.v) < 3999) {
      console.log('User entering a number ', argv.v);
      resultValue = parseNumbers(argv);
    } else {
      console.log('Your Number didn`t make sense to me :(');
      console.log('I only understand whole numbers with values between 1 and 3999');
    }
  }	else {
    console.log('You didn`t enter any whole numbers with values between 1 and 3999');
  }
  return resultValue;
}

module.exports = validateNumbers;
