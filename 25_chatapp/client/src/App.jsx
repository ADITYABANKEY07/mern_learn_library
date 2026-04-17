import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5001");

const App = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    // Listen for events from the OTHER user
    socket.on("user_typing", () => setIsTyping(true));
    socket.on("user_stopped", () => setIsTyping(false));

    socket.on("receive_msg", (data) => {
      setChat((prev) => [...prev, { ...data, sentByMe: false }]);
      setIsTyping(false); // Stop showing "Typing..." once the message is received
    });

    return () => {
      socket.off("user_typing");
      socket.off("user_stopped");
      socket.off("receive_msg");
    };
  }, []);

  const handleInputChange = (e) => {
    setMessage(e.target.value);

    // Tell the server I am typing
    socket.emit("typing");

    // Reset the "stop typing" timer every time a key is pressed
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    typingTimeoutRef.current = setTimeout(() => {
      socket.emit("stop_typing");
    }, 2000);
  };

  const sendMessage = (e) => {
    e?.preventDefault();
    if (!message.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    const msgData = { message, sentByMe: true, time: currentTime };

    socket.emit("send_msg", { message, time: currentTime });

    // Immediately tell others I stopped typing because I sent the message
    socket.emit("stop_typing");
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    setChat((prev) => [...prev, msgData]);
    setMessage("");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 font-sans"
      style={{
        backgroundImage:
          "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col h-[80vh]">
        {/* Header */}
        <div className="bg-green-900 p-4 text-white shadow-md">
          <h1 className="text-xl font-bold tracking-tight">Chat App</h1>
          <p className="text-xs text-green-200">
            {/* Logic: Show Typing... only when the OTHER side is typing */}
            {isTyping ? "Typing..." : "Online"}
          </p>
        </div>

        {/* Message Area */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-4"
          style={{
            backgroundImage:
              "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
            backgroundBlendMode: "overlay",
          }}
        >
          {chat.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sentByMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl shadow-sm text-sm relative ${
                  msg.sentByMe
                    ? "bg-green-900 text-white rounded-br-none"
                    : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                }`}
              >
                <div>{msg.message}</div>
                <div
                  className={`text-[10px] mt-1 text-right opacity-70 ${
                    msg.sentByMe ? "text-green-100" : "text-gray-500"
                  }`}
                >
                  {msg.time}
                  {msg.sentByMe && (
                    <span className="text-blue-400 text-[10px]">
                      {/* Mock Blue Ticks */}
                      ✓✓
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>

        {/* Input Area */}
        <form
          onSubmit={sendMessage}
          className="p-4 bg-white border-t border-gray-100 flex gap-2"
        >
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={handleInputChange}
            className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-700"
          />
          <button
            type="submit"
            className="bg-green-900 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg active:scale-95"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
