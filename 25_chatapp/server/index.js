import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`Socket connection established: ${socket.id}`);

  // 1. Listen for typing start
  socket.on("typing", () => {
    // broadcast.emit sends to everyone EXCEPT the person who is typing
    socket.broadcast.emit("user_typing");
  });

  // 2. Listen for typing stop
  socket.on("stop_typing", () => {
    socket.broadcast.emit("user_stopped");
  });

  // Listen for chat messages
  socket.on("send_msg", (data) => {
    console.log(data);
    socket.broadcast.emit("receive_msg", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(5001, () => {
  console.log("Server running on 5001");
});