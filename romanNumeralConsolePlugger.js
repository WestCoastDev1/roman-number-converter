var romanNumeralCrossParser = require('./romanNumeralCrossParser/romanNumeralCrossParser.js');

// if I had some time on this I'd make it better but as it stands you
// just need to enter "node app.js -t Roman -v MCMLXXXV" at the root
// to get the full console experience. I'd also have liked to sort out
// a good way of moving between modes...
function romanNumeralConsolePlugger() {
  var resultantValue;
  var argv = require('yargs')
  	.command('from', 'convert between Roman and Arabic numbers', function (yargs) {
  		yargs.options({
  			type: {
  				demand: true,
  				alias: 't',
  				description: 'the type of number you are inputting (Roman or Numeric) goes here',
  				type: 'string'
  			},
  			value: {
  				demand: true,
  				alias: 'v',
  				description: 'the number or Roman numerals you are inputting (between 1 and 3999) goes here',
  				type: 'string'
  			}
  		}).help('help');
  	})
  	.argv;
  var command = argv._[0];
var resultantValue = romanNumeralCrossParser(argv);

return resultantValue;
}

module.exports = romanNumeralConsolePlugger;
