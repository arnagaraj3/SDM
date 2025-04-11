import { useState } from "react";

const DeveloperAdd = () => {
  const [data, setData] = useState({
    water_body: "",
    pH: "",
    turbidity: "",
    temperature: "",
    dissolved_oxygen: "",
    conductivity: "",
    potability: "",
    organic_carbon: "",
    ammonia: "",
    nitrates: "",
    nitrites: "",
    sulfate: "",
    solids: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Data added successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">Add New Data</h1>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <input type="text" name="water_body" placeholder="Water Body" className="w-full p-2 border rounded mb-2 dark:bg-gray-700" onChange={handleChange} />
        <input type="number" name="pH" placeholder="pH Level" className="w-full p-2 border rounded mb-2 dark:bg-gray-700" onChange={handleChange} />
        <input type="number" name="turbidity" placeholder="Turbidity" className="w-full p-2 border rounded mb-2 dark:bg-gray-700" onChange={handleChange} />
        <button className="mt-4 p-3 bg-blue-500 text-white rounded w-full hover:bg-blue-700" onClick={handleSubmit}>
          Add Data
        </button>
      </div>
    </div>
  );
};

export default DeveloperAdd;
