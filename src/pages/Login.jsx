import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const messages = [
  "Welcome to Bacteria Detection System!",
  "Ensure safe drinking water with AI-powered analysis.",
  "Fast and accurate bacteria detection in just a click!",
  "Join us in making water safer for everyone."
];

const newsTickerMessages = [
  "🔬 New AI Model Update: Faster and More Accurate Bacteria Detection!",
  "🌍 1 Lakh Water Samples Analyzed – Join Our Mission for Safer Water!",
  "⚡ Tip: Get Instant Results by Uploading Large CSV Files.",
  "💡 Fun Fact: Some Bacteria Can Glow in the Dark! 🔦",
  "👩‍💻 Developers – Integrate Seamlessly!",
  "💙 Thank You For Trusting Us",
  "📅 Check for System Updates for the Latest Features!",
  "🔍 Research in Progress: Enhancing AI for Even More Precise Detection!"
];

const Login = ({ setIsUserLoggedIn, setIsDeveloperLoggedIn }) => {
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const navigate = useNavigate();

  // ✅ Function to speak a message
  const speakMessage = (message) => {
    if (!isMuted && "speechSynthesis" in window) {
      speechSynthesis.cancel(); // Stop any previous speech
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = 1;
      speechSynthesis.speak(utterance);
    }
  };

  // ✅ Play first message on user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!isMuted) speakMessage(messages[0]);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 8000);

    return () => {
      clearInterval(interval);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  // ✅ Speak new messages as they appear
  useEffect(() => {
    if (!isMuted && messageIndex !== 0) {
      speakMessage(messages[messageIndex]);
    }
  }, [messageIndex, isMuted]);

  const handleUserLogin = () => {
    localStorage.removeItem("isDeveloperLoggedIn");
    setIsDeveloperLoggedIn(false);
    setIsUserLoggedIn(true);
    localStorage.setItem("isUserLoggedIn", "true");
    navigate("/dashboard");
  };

  const handleDeveloperLogin = () => {
    localStorage.removeItem("isUserLoggedIn");
    setIsUserLoggedIn(false);
    setIsDeveloperLoggedIn(true);
    localStorage.setItem("isDeveloperLoggedIn", "true");
    navigate("/developer-dashboard");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* ✅ Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-blur"></div>

      {/* ✅ Rotating Message */}
      <div className="absolute top-5 w-full flex justify-center items-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={messages[messageIndex]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold bg-gray-800 py-3 px-6 rounded-full shadow-lg max-w-lg text-center"
          >
            {messages[messageIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ✅ Mute/Unmute Button */}
      <button
        className="absolute top-5 right-5 bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-600 transition"
        onClick={() => {
          speechSynthesis.cancel();
          setIsMuted((prev) => !prev);
        }}
      >
        {isMuted ? "🔈 Unmute" : "🔇 Mute"}
      </button>

      {/* ✅ Login Box */}
      <div className="absolute w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={isDeveloperMode ? "developer-login" : "user-login"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center"
          >
            <h1 className={`text-3xl font-bold mb-6 ${isDeveloperMode ? "text-purple-400" : "text-blue-400"}`}>
              {isDeveloperMode ? "Developer Login" : "User Login"}
            </h1>

            <input
              type="text"
              placeholder={isDeveloperMode ? "Developer Username" : "Username"}
              className="p-3 mb-4 border rounded w-80 bg-gray-700 text-white"
            />
            <input
              type="password"
              placeholder={isDeveloperMode ? "Developer Password" : "Password"}
              className="p-3 mb-4 border rounded w-80 bg-gray-700 text-white"
            />

            <button
              className={`p-3 text-white rounded w-80 transition ${
                isDeveloperMode
                  ? "bg-purple-500 hover:bg-purple-700"
                  : "bg-blue-500 hover:bg-blue-700"
              }`}
              onClick={isDeveloperMode ? handleDeveloperLogin : handleUserLogin}
            >
              {isDeveloperMode ? "Login as Developer" : "Login as User"}
            </button>

            {!isDeveloperMode && (
              <button
                className="mt-4 text-blue-400 hover:underline"
                onClick={() => navigate("/register")}
              >
                New User? Register Here
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ✅ Toggle Developer/User Mode */}
      {!isDeveloperMode && (
        <motion.button
          initial={{ opacity: 1 }}
          animate={{ opacity: isDeveloperMode ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-700 transition z-10"
          onClick={() => setIsDeveloperMode(true)}
        >
          Developer?
        </motion.button>
      )}

      {isDeveloperMode && (
        <motion.button
          initial={{ opacity: 1 }}
          animate={{ opacity: isDeveloperMode ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-purple-500 px-6 py-3 rounded-lg hover:bg-purple-700 transition z-10"
          onClick={() => setIsDeveloperMode(false)}
        >
          User?
        </motion.button>
      )}

      {/* ✅ News Ticker */}
      <div className="absolute bottom-5 w-full overflow-hidden bg-gray-800 text-white py-2 shadow-md">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-lg font-semibold"
        >
          {newsTickerMessages.map((news, index) => (
            <span key={index} className="mx-8">{news}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
