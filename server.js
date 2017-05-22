var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./middleware/middleware.js');
var favicon = require('express-favicon');
var romanNumeralCrossParser = require('./romanNumeralCrossParser/romanNumeralCrossParser.js');
var router = express.Router();
var path = __dirname + '/public/';

var program = express();
var PORT = process.env.PORT || 3000;

function server() {
  program.use( bodyParser.json() );
  program.use(bodyParser.urlencoded({
    extended: true
  }));
  program.use(middleware.logger);
  program.use(favicon(__dirname + '/public/favicon.png'));

  router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
  });

  // index
  router.get("/",function(req,res){
    res.sendFile(path + "index.html");
  });

  // about
  router.get("/about", middleware.requireAuthentication, function(req,res){
    res.sendFile(path + "about.html");
  });

  //contact
  router.get("/contact", middleware.requireAuthentication, function(req,res){
    res.sendFile(path + "contact.html");
  });

  program.use("/",router);

  // POST /argv
  program.post('/', function (req, res) {
    var argv = req.body.dataSlug;
    console.log(argv);
    argv = JSON.parse(JSON.stringify(argv));
    console.log(argv);
    var feedback = romanNumeralCrossParser(argv);
    console.log(feedback);
    res.json(feedback);
  });

  // 404
  //program.use("*",function(req,res){
  //  res.sendFile(path + "404.html");
  //});

  program.listen(PORT, function () {
    console.log('server up...')
    console.log('port ' + PORT + ' in use...');
  });
}

module.exports = server;
