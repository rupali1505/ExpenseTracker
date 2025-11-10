
import { Cell, Pie, PieChart, Legend , ResponsiveContainer} from 'recharts';


const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F',  '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartComponent({data}) {
  return (
    <ResponsiveContainer width='100%' height={200}>
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        cx="50%"
        cy="50%"
        dataKey="value"
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend iconType='rect' verticalAlign="bottom"/>
    </PieChart>
    </ResponsiveContainer>
  );
}