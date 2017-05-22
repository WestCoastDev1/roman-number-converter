var validateRoman = require('./validateRoman.js');
var validateNumbers = require('./validateNumbers.js');

function romanNumeralCrossParser(argv) {
  console.log('the app is started');
  console.log(argv);
  console.log(argv.t);
  var resultantValue;
  // argv = (typeof argv === 'undefined') ? 'default' : optionalArg;
  if (argv.t === 'Roman') {
    resultantValue = validateRoman(argv);
  } else if (argv.t === 'Numeric') {
    resultantValue = validateNumbers(argv);
  } else {
    console.log('Sorry: I can only work out Roman or Numeric values');
  }
  if(typeof resultantValue !== "undefined") {
    console.log('your ', argv.t, ' value of ', argv.v, ' converts to ', resultantValue);
  } else {
    console.log('Sorry: I couldn`t work out a value for that :(');
  }

  return resultantValue;
}

module.exports = romanNumeralCrossParser;
