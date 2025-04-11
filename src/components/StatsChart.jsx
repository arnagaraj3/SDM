import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { date: "Day 1", bacteriaLevel: 5 },
  { date: "Day 2", bacteriaLevel: 8 },
  { date: "Day 3", bacteriaLevel: 12 },
  { date: "Day 4", bacteriaLevel: 6 },
  { date: "Day 5", bacteriaLevel: 10 },
];

const StatsChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Bacteria Level Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="bacteriaLevel" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;
