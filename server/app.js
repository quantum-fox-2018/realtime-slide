const express = require('express')
const app = express()

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('drag', () => {
      socket.emit('drag')
      socket.broadcast.emit('drag')
  })
});
