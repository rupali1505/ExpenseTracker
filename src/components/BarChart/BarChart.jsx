import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BarChartCompo({ data }) {
  return (
    <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center", color: "black", marginBottom: "15px" }}>
        Top Expenses
      </h2>

      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
          >
            <XAxis type="number" hide /> 
            <YAxis
              type="category"
              dataKey="name"
              width={100}
              axisLine={false}
              tick={{ fill: "black" }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "black", color: "black", borderRadius: "8px" }}
            />
            <Bar dataKey="value" fill="#82ca9d" barSize={20} radius={[5, 5, 5, 5]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
