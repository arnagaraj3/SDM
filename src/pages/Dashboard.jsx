import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();
  const summaryData = [
    { name: "Total Tests", value: 100586 },
    { name: "Safe Water", value: 72350 },
    { name: "Contaminated", value: 28236 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
      <p className="text-lg mt-2 ">Overview of water quality trends and past analyses.</p>

      <div className="grid grid-cols-3 gap-6 mt-6">
        {summaryData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-700">{item.name}</h2>
            <p className="text-2xl font-bold text-black">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-700">Water Potability Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={summaryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-700">Perform New Analysis</h2>
        <button
          onClick={() => navigate("/analysis")}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to Analysis
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
