import React, { useState, useEffect } from "react";
import "../style/App.scss";
import Chart from "./Chart";
import ChartForm from "./ChartForm";

function ChartBlock() {
  const [data, setData] = useState([]);
  const [selectedGraph, setSelectedGraph] = useState("");
  const [selectedExchange, setSelectedExchange] = useState("");
  const [showChart, setShowChart] = useState(false);

  const handleGraphChange = (e) => {
    setSelectedGraph(e.target.value);
  };

  const handleExchangeChange = (e) => {
    setSelectedExchange(e.target.value);
  };

  const handleDrawChart = (e) => {
    e.preventDefault();
    setShowChart(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedGraph && selectedExchange) {
        const response = await fetch(
          `https://jellyfish-app-hmfiz.ondigitalocean.app/getDBase/${selectedExchange}`
        );
        const data = await response.json();
        const filteredData = data.data.filter((el) => el[selectedGraph]);
        setData(filteredData);
      }
    };

    fetchData();
  }, [selectedGraph, selectedExchange]);
  return (
    <div className="Chart-block">
      <ChartForm
        handleGraphChange={handleGraphChange}
        handleExchangeChange={handleExchangeChange}
        handleDrawChart={handleDrawChart}
      />
      {showChart && data.length > 0 && (
        <Chart className="graph" data={data} selectedGraph={selectedGraph} />
      )}
    </div>
  );
}

export default ChartBlock;
