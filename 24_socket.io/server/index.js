import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

// Create HTTP server
const server = createServer(app);

// Setup Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // React app origin
    methods: ["GET", "POST"],
  },
});

// WebSocket connection

io.on("connection", (socket) => {
  console.log(`Socket connection establish id ${socket.id}`);
  // Listen for chat messages

  socket.on("send_msg", (data) => {
    console.log(data);
    socket.broadcast.emit("receive_msg", data);
  });
  // Broadcast to all other clients
});

server.listen(5001, () => {
  console.log("Server running on 5001");
});
