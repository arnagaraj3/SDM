import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DeveloperSidebar from "./components/DeveloperSidebar";
import AnimatedRoutes from "./pages/AnimatedRoutes";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isDeveloperLoggedIn, setIsDeveloperLoggedIn] = useState(false);
  const location = useLocation(); // ✅ Track Current Page

  useEffect(() => {
    document.documentElement.classList.add("dark");

    // ✅ Load authentication status from localStorage
    const userAuth = localStorage.getItem("isUserLoggedIn") === "true";
    const devAuth = localStorage.getItem("isDeveloperLoggedIn") === "true";
    
    setIsUserLoggedIn(userAuth);
    setIsDeveloperLoggedIn(devAuth);
  }, []);

  useEffect(() => {
    setIsSidebarOpen(false); // ✅ Auto-close sidebar on route change
  }, [location.pathname]); // ✅ Trigger when path changes

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // ✅ Hide Sidebar on Login & Register Page
  const isAuthPage = location.pathname === "/" || location.pathname === "/register";

  return (
    <div className="flex h-screen">
      {!isAuthPage && isUserLoggedIn && (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      {!isAuthPage && isDeveloperLoggedIn && (
        <DeveloperSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}

      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen && !isAuthPage ? "ml-64" : ""}`}>
        {!isAuthPage && (isUserLoggedIn || isDeveloperLoggedIn) ? <Navbar toggleSidebar={toggleSidebar} /> : null}
        <AnimatedRoutes 
          isUserLoggedIn={isUserLoggedIn} 
          isDeveloperLoggedIn={isDeveloperLoggedIn} 
          setIsUserLoggedIn={setIsUserLoggedIn} 
          setIsDeveloperLoggedIn={setIsDeveloperLoggedIn} 
        />
      </div>
    </div>
  );
}

export default App;
