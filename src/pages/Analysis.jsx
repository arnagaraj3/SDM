import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Analysis = () => {
  const [dataUploaded, setDataUploaded] = useState(false);
  const [manualInput, setManualInput] = useState(false);
  const [formData, setFormData] = useState({
    pH: "",
    Turbidity_NTU: "",
    Temperature_C: "",
    Dissolved_Oxygen_mgL: "",
    Conductivity_uS: "",
    Organic_Carbon_mgL: "",
    Ammonia_mgL: "",
    Nitrates_mgL: "",
    Nitrites_mgL: "",
    Sulfate_mgL: "",
    Solids_ppm: "",
  });

  const navigate = useNavigate();
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDataUploaded(true);
      setManualInput(false);
    }
  };
  const toggleManualInput = () => {
    setManualInput(!manualInput);
    setDataUploaded(false);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-600">Water Quality Analysis</h1>
      <p className="text-lg text-gray-700 mt-2">Upload your water quality data or enter values manually.</p>
      <div className="mt-4">
        <input type="file" onChange={handleFileUpload} className="p-2 border rounded-md" accept=".csv" />
      </div>
      <div className="mt-4">
        <button onClick={toggleManualInput} className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
          {manualInput ? "Cancel Manual Input" : "Enter Data Manually"}
        </button>
      </div>
      {manualInput && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-700">Enter Water Quality Parameters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label className="block font-medium text-gray-700">{key.replace(/_/g, " ")}</label>
                <input
                  type="number"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder={`Enter ${key}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {(dataUploaded || manualInput) && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Select Analysis Method:</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button
              onClick={() => navigate("/classification")}
              className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Classification
            </button>
            <button
              onClick={() => navigate("/clustering")}
              className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Clustering
            </button>
            <button
              onClick={() => navigate("/association")}
              className="p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            >
              Association Rule Mining
            </button>
            <button
              onClick={() => navigate("/outliers")}
              className="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Outlier Detection
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analysis;
