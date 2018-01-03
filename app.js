var app = require('express')();
var http = require('http').Server(app);
let multiply = require('./multiply');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/multiply/:number', function(req, res){
  console.log(req.params.number);
  let response = multiply(req.params.number);
  res.json(response);
});

module.exports = app
