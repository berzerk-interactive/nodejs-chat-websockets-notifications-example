var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/multiply/:number', function(req, res){
  console.log(req.params.number);
  let response = req.params.number*2
  res.json(response);
});

module.exports = app
