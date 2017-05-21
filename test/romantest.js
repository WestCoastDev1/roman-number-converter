var chai = require('chai');
var assert = require('chai').assert;
var romanNumeralCrossParser = require('../romanNumeralCrossParser/romanNumeralCrossParser.js');
var parseNumbers = require('../romanNumeralCrossParser/parseNumbers.js');
var parseRoman = require('../romanNumeralCrossParser/parseRoman.js');
describe('Test Suite', function(){
  it('should pass romanNumeralCrossParser', function(){

    var result = romanNumeralCrossParser();

	assert.equal(result, '1969', 'result equal `1969`');
  });
});
describe('Test parseNumbers', function(){
  it('should pass parseNumbers', function(){

	var result = parseNumbers(1969);

	assert.typeOf(result, 'string', 'result is a string'); // with optional message
	assert.equal(result, 'MCMLXIX', 'result equal `MCMLXIX`');
  });
});
describe('Test parseRoman', function(){
  it('should pass parseRoman', function(){

	var result = parseRoman('MCMLXIX');

	assert.typeOf(result, 'string', 'result is a string'); // with optional message
	assert.equal(result, '1969', 'result equal `1969`');
  });
});
