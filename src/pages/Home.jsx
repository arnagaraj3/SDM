import { Link } from "react-router-dom";
import ChatbotComponent from "../components/chatbot/ChatbotComponent";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-[var(--color-bg)] text-[var(--color-text)] relative">
      {/* ✅ Title */}
      <h1 className="text-3xl font-extrabold text-[var(--color-primary)] dark:text-[var(--color-accent)] text-center">
        Bacteria Detection System
      </h1>

      {/* ✅ Subtitle */}
      <p className="text-[var(--color-secondary)] mt-3 text-lg text-center">
        Analyze water quality and determine potability with advanced machine learning.
      </p>

      {/* ✅ Button to Navigate to Dashboard */}
      <Link to="/dashboard">
        <button className="mt-6 px-6 py-3 bg-[var(--color-primary)] dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition shadow-lg">
          Go to Dashboard
        </button>
      </Link>

      {/* ✅ Embedded Video (Responsive) */}
      <div className="mt-10 w-full max-w-3xl">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/J_frItC9WOQ?si=5mjnw1R3kXyZMaIZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* ✅ Chatbot (Optional, Can Be Removed if Not Needed) */}
      <ChatbotComponent />
    </div>
  );
};

export default Home;
