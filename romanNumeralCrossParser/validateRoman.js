var parseRoman = require('./parseRoman.js')

function validateRoman(argv) {
  var resultValue;
  if (argv.v) {
    console.log('User entering Roman Chars ', argv.v);
    argv.v = argv.v.toUpperCase();
    var goodRomanInRange = validateRangeRoman(argv.v);
    console.log("good Roman = ", goodRomanInRange);
    if (goodRomanInRange) {
      resultValue = parseRoman(argv);
    } else {
      console.log('Your Roman numerals didn`t make sense to me :(');
      console.log('I only understand Roman numerals with values between 1 and 3999');
    }
  } else {
    console.log('You didn`t enter any Roman numerals :(');
  }
  return resultValue
}

function validateRangeRoman(romanString) {
    var regex = /^(\b(?=[MDCLXVI])(M{0,3})(C[DM]|D?C{0,3})(X[LC]|L?X{0,3})(I[VX]|V?I{0,3})\b)$/;
    return regex.test(romanString);
}

module.exports = validateRoman;
