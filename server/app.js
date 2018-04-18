var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'ejs');

// app.get('/', function(req, res){
    //   res.send('<h1>Hello world</h1>');
    // res.render()
// });

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    
    socket.on('click carousel', function(index) {
        console.log('ini index',index);
        io.emit('click carousel', index)
    })


});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
    