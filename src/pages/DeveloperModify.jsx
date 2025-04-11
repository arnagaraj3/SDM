import { useState } from "react";

const DeveloperModify = () => {
  // Sample data (replace with actual data from backend if needed)
  const [data, setData] = useState([
    { id: 1, water_body: "River", pH: 7.2, turbidity: 2.5, temperature: 20 },
    { id: 2, water_body: "Lake", pH: 6.8, turbidity: 3.1, temperature: 18 },
  ]);

  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    water_body: "",
    pH: "",
    turbidity: "",
    temperature: "",
  });

  // ✅ Handle Selection of Entry to Modify
  const handleSelect = (id) => {
    const selected = data.find((entry) => entry.id === id);
    setSelectedId(id);
    setFormData(selected);
  };

  // ✅ Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Modification
  const handleModify = () => {
    setData(data.map((entry) => (entry.id === selectedId ? { ...entry, ...formData } : entry)));
    alert("Data modified successfully!");
    setSelectedId(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">Modify Data</h1>

      {/* ✅ Data List to Select an Entry */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Select Data to Modify</h2>
        <ul>
          {data.map((entry) => (
            <li key={entry.id} className="mb-2">
              <button className="p-2 bg-blue-500 text-white rounded w-full hover:bg-blue-700" onClick={() => handleSelect(entry.id)}>
                {entry.water_body} (pH: {entry.pH})
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Modify Selected Data */}
      {selectedId && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md mt-6">
          <h2 className="text-xl font-semibold mb-4">Modify Data</h2>
          <input type="text" name="water_body" placeholder="Water Body" value={formData.water_body} className="w-full p-2 border rounded mb-2 dark:bg-gray-700" onChange={handleChange} />
          <input type="number" name="pH" placeholder="pH Level" value={formData.pH} className="w-full p-2 border rounded mb-2 dark:bg-gray-700" onChange={handleChange} />
          <input type="number" name="turbidity" placeholder="Turbidity" value={formData.turbidity} className="w-full p-2 border rounded mb-2 dark:bg-gray-700" onChange={handleChange} />
          <button className="mt-4 p-3 bg-yellow-500 text-white rounded w-full hover:bg-yellow-700" onClick={handleModify}>
            Modify Data
          </button>
        </div>
      )}
    </div>
  );
};

export default DeveloperModify;
