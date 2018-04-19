const express = require('express')
const app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>')
})

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('send messages', function(msg){
    console.log('message: ' + msg)
    io.emit('chat message', msg)
  })

  socket.on('next', function (command) {
    console.log(command)
    io.emit('slide next', command)
  })

  socket.on('previous', function (command) {
    console.log(command)
    io.emit('slide previous', command)
  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3200, function(){
  console.log('listening on *:3200')
})
