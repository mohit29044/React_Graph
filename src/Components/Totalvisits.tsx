import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Totalvisits() {
  const data = [
    { name: "1", uv: 4000, pv: 3000, amt: 2400 },
    { name: "5", uv: 3000, pv: 1398, amt: 2210 },
    { name: "10", uv: 2000, pv: 9800, amt: 2290 },
    { name: "15", uv: 2780, pv: 3908, amt: 2000 },
    { name: "20", uv: 1890, pv: 4800, amt: 2181 },
    { name: "25", uv: 2390, pv: 3800, amt: 2500 },
    { name: "30", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="bg-white h-[330px] p-3 m-3 rounded-lg shadow-lg md:col-span-2">
      <div className="flex justify-between font-semibold">
        <h3>Total Visits</h3>
        <h3 className="text-[#FF5961]">November 2024</h3>
      </div>
      <ResponsiveContainer width="100%" height="100%" className="mt-3">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#d0d0d0"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#FF5961"
            strokeWidth={1.5}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#FF5960" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Totalvisits;
