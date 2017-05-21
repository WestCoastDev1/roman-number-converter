function parseRoman(romanToParse) {
  console.log(romanToParse);
  console.log(romanToParse.v);
  var outSum = 0;
  try{
    // Setup flags to handle the negative cases
    var minusFlagThousands = false;
    var minusFlagFiveHundreds = false;
    var minusFlagHundreds = false;
    var minusFlagFifties = false;
    var minusFlagTens = false;
    var minusFlagFives = false;
    // change to 'proper' Array just because its functionally explicit
    var valueArray = Array.from(romanToParse.v);
    console.log(valueArray);
    // Set flags for negative cases
    if(valueArray.indexOf("C")>0) {
      if(valueArray.lastIndexOf("M")>valueArray.indexOf("C")){minusFlagThousands = true;};
      if(valueArray.lastIndexOf("D")>valueArray.indexOf("C")){minusFlagFiveHundreds = true;};
    }
    if(valueArray.indexOf("X")>0) {
      if(valueArray.lastIndexOf("C")>valueArray.indexOf("X")){minusFlagHundreds = true;};
      if(valueArray.lastIndexOf("L")>valueArray.indexOf("X")){minusFlagFifties = true;};
    }
    if(valueArray.indexOf("I")>0){
      if(valueArray.lastIndexOf("X")>valueArray.indexOf("I")){minusFlagTens = true;};
      if(valueArray.lastIndexOf("V")>valueArray.indexOf("I")){minusFlagFives = true;};
    }
    console.log(minusFlagThousands, minusFlagFiveHundreds, minusFlagHundreds, minusFlagFifties, minusFlagTens, minusFlagFives);
    for(var i = 0; i < valueArray.length; i++)
    {
      // sum the entire numbr ignoring negative cases
      if (valueArray[i] === "M") {outSum = outSum + 1000;}
      if (valueArray[i] === "D") {outSum = outSum + 500;}
      if (valueArray[i] === "C") {outSum = outSum + 100;}
      if (valueArray[i] === "L") {outSum = outSum + 50;}
      if (valueArray[i] === "X") {outSum = outSum + 10;}
      if (valueArray[i] === "V") {outSum = outSum + 5;}
      if (valueArray[i] === "I") {outSum = outSum + 1;}
    };
    console.log(outSum);
    // use the negatives flags to remove the negative value and the ignorantly added value
    if (minusFlagThousands) {outSum = outSum - 200;}
    if (minusFlagFiveHundreds) {outSum = outSum - 200;}
    if (minusFlagHundreds) {outSum = outSum - 20;}
    if (minusFlagFifties) {outSum = outSum - 20;}
    if (minusFlagTens) {outSum = outSum - 2;}
    if (minusFlagFives) {outSum = outSum - 2;}
    console.log(outSum);
  } catch (e) {
    console.log('Sorry, something went wrong :(');
    console.log(e.message);
  } finally {
    console.log('Finally block executed');
  }
  console.log('this is coming from inside of the function "parseRoman"');
  console.log(outSum);
  return (outSum.toString());
}

module.exports = parseRoman;
