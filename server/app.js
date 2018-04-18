const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>WebSocket Slide Show Server</h1>')
})

const slide = io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('slide changed', function(payload) {
    console.log('slide changed :', payload.hash)

    slide.emit('navigate', {
      hash: payload.hash
    })
  })
})

http.listen(3000, function(){
  console.log('Listening on port 3000')
})

