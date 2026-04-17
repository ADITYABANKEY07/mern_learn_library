import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5001");

const App = () => {
  let [message, setMessage] = useState("");
  let [chat, setChat] = useState([]);
  let sendMessage = () => {
    socket.emit("send_msg", { message });
    setChat((prev) => [...prev, { message }]);
    setMessage("");
  };
  useEffect(() => {
    socket.on("receive_msg", (data) => {
      setChat((prev) => [...prev, data]);
    });
    return () => {
      socket.off("receive_msg");
    };
  }, []);
  return (
    <div className="p-5 bg-gray-500 h-screen">
      <h1 className="text-5xl font-bold text-center text-white capitalize">
        Welcome to my chat app
      </h1>
      <div className="flex items-center justify-center mt-5">
        <input
          type="text"
          placeholder="Enter something..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="border-2 text-white border-black"
        />{" "}
        <br />
        <button
          onClick={sendMessage}
          className="px-3 py-[2px] bg-green-800 text-white"
        >
          Send
        </button>
        {chat.map((msg, i) => (
          <p key={i}>{msg.message}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
