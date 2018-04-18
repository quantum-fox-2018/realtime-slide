const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

io.on('connection', function(socket){
    socket.on('send img url', function(msg){
      io.emit('send img url', msg);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});