import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
const AudienceChart = () => {
  const data = [
    { month: "Jan", value: 1800000 },
    { month: "Feb", value: 1500000 },
    { month: "Mar", value: 2200000 },
    { month: "Apr", value: 2500000 },
    { month: "May", value: 2300000 },
    { month: "Jun", value: 3000000 },
    { month: "Jul", value: 2800000 },
    { month: "Aug", value: 2400000 },
    { month: "Sep", value: 2000000 },
    { month: "Oct", value: 1900000 },
    { month: "Nov", value: 1700000 },
    { month: "Dec", value: 1600000 },
  ];

  const formatYAxis = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value;
  };

  return (
    <div className="h-80 p-3 m-3 rounded-lg shadow-lg bg-white md:col-span-2">
      <h3 className="font-semibold">Audience</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#666" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#666" }}
            tickFormatter={formatYAxis}
          />
          <Tooltip
            formatter={(value) => formatYAxis(value)}
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
          />
          <Bar dataKey="value" fill="#FF5961" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AudienceChart;
