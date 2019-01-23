const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.send('halo')
})

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('next slide', function(){
    console.log('masuk ke app.js')
    socket.emit('next slide')
    socket.broadcast.emit('next slide')

  });
  socket.on('prev slide', function(){
    console.log('masuk ke app.js')
    socket.emit('prev slide')
    socket.broadcast.emit('prev slide')
  });
})


http.listen(3000, () => console.log('listening on port 3000'))