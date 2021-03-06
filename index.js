const app = require('./app')
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg)
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
  console.log('some other PR 2');
});
