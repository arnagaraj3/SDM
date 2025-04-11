import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt } from "react-icons/fa";

const DeveloperSidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isDeveloper"); // ✅ Reset Developer Login State
    navigate("/"); // Redirect to Home
    window.location.reload(); // Reload page to apply changes
  };

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button className="text-white mb-6" onClick={toggleSidebar}>
        ✖ Close
      </button>
      <ul className="space-y-4">
        <li>
          <Link to="/developer-add" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
            <FaPlus /> <span>Add Data</span>
          </Link>
        </li>
        <li>
          <Link to="/developer-modify" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
            <FaEdit /> <span>Modify Data</span>
          </Link>
        </li>
        <li>
          <Link to="/developer-delete" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
            <FaTrash /> <span>Delete Data</span>
          </Link>
        </li>
        <li>
          <button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-700 w-full" onClick={handleLogout}>
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DeveloperSidebar;
