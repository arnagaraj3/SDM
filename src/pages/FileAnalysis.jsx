import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const FileAnalysis = () => {
  const [data, setData] = useState([]);
  const [isSafe, setIsSafe] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const parsedData = text
        .split("\n")
        .slice(1)
        .map((row, index) => {
          const [day, bacteriaLevel] = row.split(",");
          return { day: `Day ${index + 1}`, bacteriaLevel: parseFloat(bacteriaLevel) };
        });

      setData(parsedData);
      analyzeWaterQuality(parsedData);
    };

    reader.readAsText(file);
  };

  const analyzeWaterQuality = (parsedData) => {
    const avgBacteriaLevel = parsedData.reduce((sum, sample) => sum + sample.bacteriaLevel, 0) / parsedData.length;
    setIsSafe(avgBacteriaLevel < 10); // Water is unsafe if bacteria level > 10
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600">Upload File for Analysis</h1>
      <input type="file" onChange={handleFileUpload} className="mt-4 p-2 border rounded-md" accept=".csv" />

      {data.length > 0 && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-700">Bacteria Level Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bacteriaLevel" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
          <p className={`mt-4 text-lg font-bold ${isSafe ? "text-green-500" : "text-red-500"}`}>
            Water is {isSafe ? "Safe ✅" : "Not Safe ❌"}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileAnalysis;
