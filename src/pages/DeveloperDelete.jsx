import { useState } from "react";

const DeveloperDelete = () => {
  // Sample data (replace with actual data from backend)
  const [data, setData] = useState([
    { id: 1, water_body: "River", pH: 7.2 },
    { id: 2, water_body: "Lake", pH: 6.8 },
  ]);

  // ✅ Handle Deletion
  const handleDelete = (id) => {
    setData(data.filter((entry) => entry.id !== id));
    alert("Data deleted successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">Delete Data</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Select Data to Delete</h2>
        <ul>
          {data.map((entry) => (
            <li key={entry.id} className="mb-2">
              <button className="p-2 bg-red-500 text-white rounded w-full hover:bg-red-700" onClick={() => handleDelete(entry.id)}>
                Delete {entry.water_body} (pH: {entry.pH})
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeveloperDelete;
