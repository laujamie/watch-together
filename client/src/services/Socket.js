import io from 'socket.io-client';

const socket = io();

export const pause = () => {
  socket.emit('pause');
};

export const play = () => {
  socket.emit('play');
};

export const loadVideo = (videoId) => {
  socket.emit('video id', videoId);
};

export const createRoom = (roomId) => {
  socket.emit('create', roomId);
};

export const subscribeToVideoId = (cb) => {
  socket.on('video id', (videoId) => cb(null, videoId));
};

export const subscribeToVideoPlay = (cb) => {
  socket.on('play', () => cb());
};

export const subscribeToVideoPause = (cb) => {
  socket.on('pause', () => cb());
};

export const timestampChange = (timestamp) => {
  socket.emit('timestamp', timestamp);
};

export const subscribeToTimestamp = (cb) => {
  socket.on('timestamp', (timestamp) => cb(timestamp));
};
