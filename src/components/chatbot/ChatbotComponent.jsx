import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { FaRobot, FaTimes } from "react-icons/fa";

const ChatbotComponent = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end">
      {showChat && (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg w-80 p-4 relative">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400">Chat with WaterBot</h2>
            <button onClick={() => setShowChat(false)} className="text-gray-500 hover:text-red-500">
              <FaTimes size={20} />
            </button>
          </div>
          
          {/* ✅ Chatbot */}
          <div className="chat-container">
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
          </div>

          {/* ✅ Style Fix (Ensures Input is Visible) */}
          <style>{`
            .react-chatbot-kit-chat-input {
              color: black !important;
              background-color: white !important;
              border: 1px solid #ccc !important;
              padding: 10px !important;
              border-radius: 5px !important;
            }
            .dark .react-chatbot-kit-chat-input {
              color: white !important;
              background-color: #333 !important;
            }
          `}</style>
        </div>
      )}

      <button
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={() => setShowChat(!showChat)}
      >
        <FaRobot size={24} />
      </button>
    </div>
  );
};

export default ChatbotComponent;
