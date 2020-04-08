import io from "socket.io-client";

const socket = io();

export const pause = () => {
  socket.emit("pause");
};

export const play = () => {
  socket.emit("play");
};

socket.on("play", () => {
  console.log("play");
});

const test = () => {
  socket.emit("lmoa");
};

export default test;
