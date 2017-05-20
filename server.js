var favicon = require('express-favicon');
var express = require('express');
var middleware = require('./middleware/middleware.js')
var program = express();

var PORT = 3000;

function server() {
  program.use(middleware.logger);
  program.use(favicon(__dirname + '/public/favicon.png'));

  //index
  program.use(express.static(__dirname + '/public'));

  //about
  program.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('This page is about the application');
  });

  program.listen(PORT, function () {
    console.log('server up...')
    console.log('port ' + PORT + ' in use...');
  });
}

module.exports = server;
