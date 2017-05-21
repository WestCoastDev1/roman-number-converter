var chai = require('chai');
var assert = require('chai').assert;
var romanNumeralCrossParser = require('../romanNumeralCrossParser/romanNumeralCrossParser.js');
var parseNumbers = require('../romanNumeralCrossParser/parseNumbers.js');
var parseRoman = require('../romanNumeralCrossParser/parseRoman.js');
var validateRoman = require('../romanNumeralCrossParser/validateRoman.js');
var validateNumbers = require('../romanNumeralCrossParser/validateNumbers.js');
describe('Test romanNumeralCrossParser', function(){
  it('should pass romanNumeralCrossParser', function(){

    var argv = ({t:'Numeric', v:'1969'});
    var result = romanNumeralCrossParser(argv);

	assert.typeOf(result, 'string', 'result is a string');
	assert.equal(result, 'MCMLXIX', 'result equal `MCMLXIX`');
  });
});
describe('Test validateNumbers', function(){
  it('should pass validateNumbers', function(){

  var argv = ({t:'Numeric', v:'1969'});
	var result = validateNumbers(argv);

	assert.typeOf(result, 'string', 'result is a string');
	assert.equal(result, 'MCMLXIX', 'result equal `MCMLXIX`');
  });
});
describe('Test parseNumbers', function(){
  it('should pass parseNumbers', function(){

  var argv = ({t:'Numeric', v:'1969'});
	var result = parseNumbers(argv);

	assert.typeOf(result, 'string', 'result is a string');
	assert.equal(result, 'MCMLXIX', 'result equal `MCMLXIX`');
  });
});
describe('Test validateRoman', function(){
  it('should pass validateRoman', function(){

  var argv = ({t:'Roman', v:'MCMLXIX'});
	var result = validateRoman(argv);

	assert.typeOf(result, 'string', 'result is a string');
	assert.equal(result, '1969', 'result equal `1969`');
  });
});
describe('Test parseRoman', function(){
  it('should pass parseRoman', function(){

  var argv = ({t:'Roman', v:'MCMLXIX'});
	var result = parseRoman(argv);

	assert.typeOf(result, 'string', 'result is a string');
	assert.equal(result, '1969', 'result equal `1969`');
  });
});
