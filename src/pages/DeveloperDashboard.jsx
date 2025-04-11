import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeveloperSidebar from "../components/DeveloperSidebar";

const DeveloperDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <DeveloperSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400">Developer Dashboard</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2">Manage water quality data.</p>
      </div>
    </div>
  );
};

export default DeveloperDashboard;
