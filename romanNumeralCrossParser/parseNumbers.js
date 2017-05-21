function parseNumbers(argv) {
  var outRoman;
  try{
    var numberInUse = parseInt(argv.v);
    var romanized = [];
      while(numberInUse >= 1000) {
        romanized.push('M');
        numberInUse = numberInUse - 1000;
      }
      if(numberInUse >= 900) {
        romanized.push('C', 'M');
        numberInUse = numberInUse - 900;
      }
      while(numberInUse >= 500) {
        romanized.push('D');
        numberInUse = numberInUse - 500;
      }
      if(numberInUse >= 400) {
        romanized.push('C', 'D');
        numberInUse = numberInUse - 400;
      }
      while(numberInUse >= 100) {
        romanized.push('C');
        numberInUse = numberInUse - 100;
      }
      if(numberInUse >= 90) {
        romanized.push('X', 'C');
        numberInUse = numberInUse - 90;
      }
      while(numberInUse >= 50) {
        romanized.push('L');
        numberInUse = numberInUse - 50;
      }
      if(numberInUse >= 40) {
        romanized.push('X', 'L');
        numberInUse = numberInUse - 40;
      }
      while(numberInUse >= 10) {
        romanized.push('X');
        numberInUse = numberInUse - 10;
      }
      if(numberInUse >= 9) {
        romanized.push('I', 'X');;
        numberInUse = numberInUse - 9;
      }
      while(numberInUse >= 5) {
        romanized.push('V');
        numberInUse = numberInUse - 5;
      }
      if(numberInUse >= 4) {
        romanized.push('I', 'V');
        numberInUse = numberInUse - 4;
      }
      while(numberInUse > 0) {
        romanized.push('I');
        numberInUse--;
      }
      console.log(romanized);
      outRoman = romanized.join("");
      console.log(outRoman);
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
