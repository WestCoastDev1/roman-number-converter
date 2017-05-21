function parseNumbers(numberToParse) {
  var outRoman;
  try{
    outRoman = "Test 0"
  } catch (e) {
    console.log('Sorry, something went wrong :(');
    console.log(e.message);
  } finally {
    console.log('Finally block executed');
  }
  console.log('this is coming from inside of the function "parseNumbers"');
  return outRoman;
}

  module.exports = parseNumbers;
