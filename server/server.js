const env = require("dotenv").config();
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const indexRouter = require("./routes/index");

const corsOptions = { origin: process.env.CORS_DOMAIN };

app.use(cors(corsOptions));
app.use("/", indexRouter);

io.on("connection", (socket) => {
  socket.on("pause", () => {
    socket.broadcast.emit("pause");
  });
  socket.on("play", () => {
    socket.broadcast.emit("play");
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
