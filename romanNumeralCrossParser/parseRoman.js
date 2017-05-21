function parseRoman(romanToParse) {
  var outSum;
  try{
    outSum = "Test 0"
  } catch (e) {
    console.log('Sorry, something went wrong :(');
    console.log(e.message);
  } finally {
    console.log('Finally block executed');
  }
  console.log('this is coming from inside of the function "parseRoman"');
  return outSum;
}

  module.exports = parseRoman;
