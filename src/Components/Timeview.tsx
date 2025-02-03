import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", value: 2 },
  { month: "Feb", value: 4 },
  { month: "Mar", value: 7 },
  { month: "Apr", value: 10 },
  { month: "May", value: 15 },
  { month: "Jun", value: 18 },
  { month: "Jul", value: 22 },
  { month: "Aug", value: 20 },
  { month: "Sep", value: 17 },
  { month: "Oct", value: 25 },
  { month: "Nov", value: 12 },
  { month: "Dec", value: 50 },
];

const Timeview: React.FC = () => {
  return (
    <div className="p-3 bg-white shadow-md rounded-lg w-3200px] h-[190px] relative mt-2">
      <div className="flex justify-between items-center mb-1 px-2">
        <h3 className="text-sm font-semibold">Time View</h3>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ccc" />
          <XAxis dataKey="month" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} domain={[0, 30]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ff4d4d"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Timeview;
