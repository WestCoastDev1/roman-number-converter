var parseRoman = require('./parseRoman.js')
var parseNumbers = require('./parseNumbers.js')

function romanNumeralCrossParser() {
  console.log('the app is started');
  var resultantValue;
  resultantValue = parseRoman('MCMLXIX');
  console.log(resultantValue);
  return resultantValue;
}

  module.exports = romanNumeralCrossParser;
