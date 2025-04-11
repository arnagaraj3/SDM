import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaFileAlt, FaSignOutAlt, FaTachometerAlt, FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-6 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      {/* Close Button */}
      <button className="text-purple-400 text-lg flex items-center gap-2 mb-6" onClick={toggleSidebar}>
        <FaTimes /> Close
      </button>

      {/* Navigation Links */}
      <ul className="space-y-4">
        <li>
          <Link to="/Home" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition">
            <FaHome /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition">
            <FaTachometerAlt /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/analysis" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition">
            <FaChartBar /> <span>Analysis</span>
          </Link>
        </li>
        <li>
          <Link to="/reports" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition">
            <FaFileAlt /> <span>Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/login" className="flex items-center space-x-3 p-3 rounded-lg bg-red-700 hover:bg-red-800 transition">
            <FaSignOutAlt /> <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
