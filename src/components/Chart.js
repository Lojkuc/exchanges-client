import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data, selectedGraph1, selectedGraph2 }) => {
  const minData = Math.min(
    ...data.map((el) => Math.min(el[selectedGraph1], el[selectedGraph2]))
  );

  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <LineChart width={600} height={400} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis domain={[minData, "auto"]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={selectedGraph1}
          stroke="blue"
          name={`${selectedGraph1} (Биржа 1)`}
        />
        <Line
          type="monotone"
          dataKey={selectedGraph2}
          stroke="red"
          name={`${selectedGraph2} (Биржа 2)`}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
