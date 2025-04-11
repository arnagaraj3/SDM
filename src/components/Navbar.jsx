import { FaBars } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle"; // Import toggle button

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg p-4 flex justify-between items-center">
      <button 
        className="text-white text-3xl ml-4 p-2 rounded-md hover:bg-white hover:bg-opacity-20 transition duration-300"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>
      <h1 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
        Bacteria Detection
      </h1>
      {/* ✅ Dark Mode Toggle Button */}
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
