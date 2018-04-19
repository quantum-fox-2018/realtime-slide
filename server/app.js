const express =require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
    console.log('Connected with client')
    console.log(socket.id)
    socket.emit('hello')
    socket.on('message', (payload) => {
        socket.emit('message', payload.message)
        socket.broadcast.emit('message', payload.message)
    })
    socket.on('slideRight', () => {
        socket.emit('slideRight')
        socket.broadcast.emit('slideRight')
    })
    socket.on('slideLeft', () => {
        socket.emit('slideLeft')
        socket.broadcast.emit('slideLeft')
    })
})

server.listen(3000, () => console.log('Connected to port 3000'))