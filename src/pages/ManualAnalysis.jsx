import React, { useState } from "react";

const ManualAnalysis = () => {
  const [formData, setFormData] = useState({
    Water_Body: "",
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

  const [isSafe, setIsSafe] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const analyzeWaterQuality = () => {
    const { pH, Turbidity_NTU, Dissolved_Oxygen_mgL } = formData;

    const phValue = parseFloat(pH);
    const turbidity = parseFloat(Turbidity_NTU);
    const oxygen = parseFloat(Dissolved_Oxygen_mgL);

    if (!isNaN(phValue) && !isNaN(turbidity) && !isNaN(oxygen)) {
      if (phValue >= 6.5 && phValue <= 8.5 && turbidity < 5 && oxygen > 5) {
        setIsSafe(true);
      } else {
        setIsSafe(false);
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600">Enter Water Data Manually</h1>
      <p className="text-lg text-gray-700 mt-2">Fill in the details to check water quality.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block font-medium text-gray-700">{key.replace(/_/g, " ")}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder={`Enter ${key}`}
            />
          </div>
        ))}
      </div>

      <button
        onClick={analyzeWaterQuality}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Analyze Water Quality
      </button>

      {isSafe !== null && (
        <p className={`mt-4 text-lg font-bold ${isSafe ? "text-green-500" : "text-red-500"}`}>
          Water is {isSafe ? "Safe ✅" : "Not Safe ❌"}
        </p>
      )}
    </div>
  );
};

export default ManualAnalysis;
