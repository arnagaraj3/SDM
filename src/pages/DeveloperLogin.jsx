import { useNavigate } from "react-router-dom";

const DeveloperLogin = ({ setIsDeveloperLoggedIn }) => { // ✅ Accept setIsDeveloperLoggedIn as prop
  const navigate = useNavigate();

  const handleDeveloperLogin = () => {
    setIsDeveloperLoggedIn(true); // ✅ Update Developer Login State
    localStorage.setItem("isDeveloperLoggedIn", "true"); // ✅ Store login status
    navigate("/developer-dashboard"); // ✅ Redirect to Developer Dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">Developer Login</h1>

      <input 
        type="text" 
        placeholder="Developer Username" 
        className="p-3 mb-4 border rounded w-80 bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
      />
      <input 
        type="password" 
        placeholder="Developer Password" 
        className="p-3 mb-4 border rounded w-80 bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
      />

      <button 
        className="p-3 bg-purple-500 text-white rounded w-80 hover:bg-purple-700"
        onClick={handleDeveloperLogin}
      >
        Login as Developer
      </button>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Not a Developer?  
        <a href="/login" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
          Go to User Login
        </a>
      </p>
    </div>
  );
};

export default DeveloperLogin;
