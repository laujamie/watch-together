const env = require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const corsOptions = { origin: process.env.CORS_DOMAIN };

app.use(cors(corsOptions));

app.use(express.static('../client/build'));

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('pause', () => {
    socket.broadcast.emit('pause');
    console.log('paused');
  });
  socket.on('play', () => {
    socket.broadcast.emit('play');
    console.log('played');
  });
  socket.on('video id', (videoId) => {
    socket.broadcast.emit('video id', videoId);
  });
  socket.on('timestamp', (timestamp) => {
    console.log(timestamp);
    io.emit('timestamp', timestamp);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
