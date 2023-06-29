import React from "react";
import "../style/App.scss";
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

const Chart = ({ data, selectedGraph }) => {
  const minData = Math.min.apply(
    0,
    data.map((el) => el.order_buy_1)
  );
  return (
    <ResponsiveContainer width={"100%"} height={1000}>
      <LineChart className="graph" width={600} height={600} data={data}>
        <XAxis dataKey="date" />
        <YAxis domain={[minData, "auto"]} />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={selectedGraph} stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
