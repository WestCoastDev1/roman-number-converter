var favicon = require('express-favicon');
var express = require('express');
var middleware = require('./middleware/middleware.js')
var router = express.Router();
var path = __dirname + '/public/';

var program = express();
var PORT = process.env.PORT || 3000;

function server() {
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

  // 404
  program.use("*",function(req,res){
  res.sendFile(path + "404.html");
  });
  //index
  // program.use(express.static(__dirname + '/public'));

  //about
  // program.get('/about', middleware.requireAuthentication, function(req, res) {
  //   res.send('This page is about the application');
  // });

  // program.get('/contact', middleware.requireAuthentication, function(req, res) {
  //   res.send('This page is about contacting me');
  // });

  program.listen(PORT, function () {
    console.log('server up...')
    console.log('port ' + PORT + ' in use...');
  });
}

module.exports = server;
