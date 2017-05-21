var chai = require('chai');
var assert = require('chai').assert;
var romanNumeralCrossParser = require('../romanNumeralCrossParser/romanNumeralCrossParser.js');
var parseNumbers = require('../romanNumeralCrossParser/parseNumbers.js');
var parseRoman = require('../romanNumeralCrossParser/parseRoman.js');
describe('Test Suite', function(){
  it('should pass romanNumeralCrossParser', function(){

    var result = romanNumeralCrossParser();

    assert.equal(result, 'hello test', 'result is `hello test`');
  });
});
describe('Test parseNumbers', function(){
  it('should pass parseNumbers', function(){

	var result = parseNumbers();

	assert.typeOf(result, 'string', 'result is a string'); // with optional message
	assert.equal(result, 'Test 0', 'result equal `Test 0`');
  });
});
describe('Test parseRoman', function(){
  it('should pass parseRoman', function(){

	var result = parseRoman();

	assert.typeOf(result, 'string', 'result is a string'); // with optional message
	assert.equal(result, 'Test 0', 'result equal `Test 0`');
  });
});
