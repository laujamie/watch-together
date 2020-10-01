const env = require('dotenv').config();
const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const corsOptions = { origin: process.env.CORS_DOMAIN };

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '../client/build')));

io.on('connection', (socket) => {
  socket.on('pause', () => {
    if (socket.curRoom) {
      socket.broadcast.to(socket.curRoom).emit('pause');
    }
  });
  socket.on('play', () => {
    if (socket.curRoom) {
      socket.broadcast.to(socket.curRoom).emit('play');
    }
  });
  socket.on('video id', (videoId) => {
    if (socket.curRoom) {
      socket.broadcast.to(socket.curRoom).emit('video id', videoId);
    }
  });
  socket.on('timestamp', (timestamp) => {
    if (socket.curRoom) {
      socket.broadcast.to(socket.curRoom).emit('timestamp', timestamp);
    }
  });
  socket.on('create', (roomId) => {
    socket.join(roomId, () => {
      const rooms = Object.keys(socket.rooms);
      socket.curRoom = rooms[1];
    });
  });
  socket.on('join', (roomId) => {});
  socket.on('leave', (roomId) => {
    socket.leave(roomId);
    socket.curRoom = null;
  });
});

app.get('*', (req, res) => {
  console.log(path.join(__dirname, '../client/build/index.html'));
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
