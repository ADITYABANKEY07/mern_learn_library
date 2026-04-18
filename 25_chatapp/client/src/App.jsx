import React, { useEffect, useState, useRef, useContext } from "react";
import { io } from "socket.io-client";
import { ThemeContext } from "./theme/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const socket = io("https://chat-backend-30re.onrender.com");

const App = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

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
      hour12: true,
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
      className={`flex items-center justify-center min-h-screen font-sans ${
        isDark ? "bg-[#0b141a]" : "bg-gray-200"
      }`}
    >
      <div
        className={`w-full max-w-md h-[90vh] rounded-xl overflow-hidden shadow-2xl flex flex-col ${
          isDark ? "bg-[#111b21]" : "bg-white"
        }`}
      >
        {/* Header */}
        <div
          className={`px-4 py-3 flex items-center justify-between border-b ${
            isDark
              ? "bg-[#202c33] border-[#2a3942]"
              : "bg-green-900 border-green-900"
          }`}
        >
          <div>
            <h1 className="text-white font-semibold text-lg">Chat App</h1>
            <p className="text-xs text-gray-200">
              {isTyping ? "Typing..." : "Online"}
            </p>
          </div>

          {/* Theme Toggle */}
<button
  onClick={toggleTheme}
  className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white active:scale-90"
>
  <span
    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
      isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
    }`}
  >
    <FiSun size={18} />
  </span>

  <span
    className={`flex items-center justify-center transition-all duration-300 ${
      isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
    }`}
  >
    <FiMoon size={18} />
  </span>
</button>
        </div>

        {/* Chat Area */}
        <div
          className={`flex-1 overflow-y-auto px-3 py-4 space-y-2 ${
            isDark ? "bg-[#0b141a]" : "bg-gray-200"
          }`}
        >
          {chat.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sentByMe ? "justify-end" : "justify-start"}`}
            >
<div
  className={`max-w-[75%] px-3 py-2 text-sm rounded-lg shadow ${
    msg.sentByMe
      ? isDark
        ? "bg-[#202c33] text-white"   // dark → gray (sent)
        : "bg-[#0d542b] text-white"  // light → green (sent)
      : isDark
        ? "bg-[#0d542b] text-white"  // dark → green (received)
        : "bg-[#0d7639] text-white" // light → white (received)
  }`}
>
                <div>{msg.message}</div>

                <div className="text-[10px] mt-1 text-right opacity-70">
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={sendMessage}
          className={`px-3 py-2 flex items-center gap-2 border-t ${
            isDark
              ? "bg-[#202c33] border-[#2a3942]"
              : "bg-white border-gray-300"
          }`}
        >
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={handleInputChange}
            className={`flex-1 px-4 py-2 rounded-full focus:outline-none text-sm ${
              isDark
                ? "bg-[#2a3942] text-white placeholder-[#8696a0]"
                : "bg-gray-100 text-black"
            }`}
          />

          <button
            type="submit"
            className={`px-4 py-2 rounded-full text-sm font-medium text-white ${
              isDark ? "bg-green-900" : "bg-green-900"
            }`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
