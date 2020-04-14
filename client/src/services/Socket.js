import io from "socket.io-client";

const socket = io();

export const pause = () => {
  socket.emit("pause");
};

export const play = () => {
  socket.emit("play");
};

export const loadVideo = (videoId) => {
  socket.emit("video id", videoId);
};

socket.on("play", () => {
  console.log("play");
});

export const subscribeToSocket = (cb) => {
  socket.on("video id", (videoId) => cb(null, videoId));
};
