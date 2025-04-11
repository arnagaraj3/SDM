import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Welcome to the future of authentication! 🚀",
  "Secure, fast, and reliable registration. 🔒",
  "Join us and start your journey today! 🎉",
];

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [fadeIn, setFadeIn] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
    const messageInterval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(messageInterval);
  }, []);

  const handleRegister = () => {
    setError(""); 

    if (!username || !password || !confirmPassword) {
      setError("⚠️ All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("⚠️ Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("❌ Passwords do not match.");
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.username === username) {
      setError("⚠️ Username already taken. Please choose another.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ username, password }));

    alert("✅ Registration successful! Please log in.");
    navigate("/"); 
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-blur"></div>
      <div className="absolute top-5 w-full flex justify-center items-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={messages[messageIndex]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold bg-gray-800 bg-opacity-60 py-3 px-6 rounded-full shadow-lg max-w-lg text-center"
          >
            {messages[messageIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div
        className={`relative z-10 bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg w-96 transform transition-opacity duration-700 ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-3xl font-bold text-black mb-6 text-center">User Registration</h1>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="p-3 mb-4 border border-white/20 rounded w-full bg-white bg-opacity-20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-4 border border-white/20 rounded w-full bg-white bg-opacity-20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-3 mb-4 border border-white/20 rounded w-full bg-white bg-opacity-20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="p-3 bg-blue-500 text-white rounded w-full hover:bg-blue-700 transition-all duration-300"
          onClick={handleRegister}
        >
          Register
        </button>
        <p className="mt-4 text-black text-center">
          Already have an account?  
          <a href="/" className="text-blue-300 hover:underline ml-2">Login Here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
