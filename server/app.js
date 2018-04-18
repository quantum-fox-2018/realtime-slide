const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', function(req, res) {
  res.send('Masuk gan, aplikasi redeeee')
})

io.on('connection', function(socket) {
  console.log('a user connected')
  socket.on('disconnect', function() {
    console.log('user disconnected')
  })
})

// terima message dari client form
io.on('connection', function(socket) {
  socket.on('slidemoversss', function(event) {
    console.log('message : ', event)
    io.emit('triggerSlide', event)
  })
})


http.listen(3000, () => {
  console.log('App listening on port 3000')
})