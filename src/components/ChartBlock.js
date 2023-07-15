import React, { useState, useEffect } from "react";
import "../style/App.scss";
import Chart from "./Chart";
import ChartForm from "./ChartForm";

function ChartBlock() {
  const [data, setData] = useState([]); // Состояние данных для графиков
  const [selectedGraph1, setSelectedGraph1] = useState(""); // Состояние выбранного графика 1
  const [selectedGraph2, setSelectedGraph2] = useState(""); // Состояние выбранного графика 2
  const [selectedExchange1, setSelectedExchange1] = useState(""); // Состояние выбранной биржи 1
  const [selectedExchange2, setSelectedExchange2] = useState(""); // Состояние выбранной биржи 2
  const [showChart, setShowChart] = useState(false); // Состояние для отображения графиков
  const [fromCalend, setFromCalend] = useState(""); // Состояние для начальной даты
  const [toCalend, setToCalend] = useState(""); // Состояние для конечной даты
  const [selectedCoin, setSelectedCoin] = useState("");

  const handleCoinChange = (e) => {
    setSelectedCoin(e.target.value);
  };
  const handleGraph1Change = (e) => {
    setSelectedGraph1(e.target.value); // Обработчик изменения выбранного графика 1
  };

  const handleGraph2Change = (e) => {
    setSelectedGraph2(e.target.value); // Обработчик изменения выбранного графика 2
  };

  const handleExchange1Change = (e) => {
    setSelectedExchange1(e.target.value); // Обработчик изменения выбранной биржи 1
  };

  const handleExchange2Change = (e) => {
    setSelectedExchange2(e.target.value); // Обработчик изменения выбранной биржи 2
  };

  const handleToCalend = (e) => {
    setToCalend(e.target.value); // Обработчик изменения конечной даты
  };

  const handleFromCalend = (e) => {
    setFromCalend(e.target.value); // Обработчик изменения начальной даты
  };

  const handleDrawChart = (e) => {
    e.preventDefault();
    setShowChart(true); // Установка состояния для отображения графиков в true при клике на кнопку "Нарисовать"
  };

  useEffect(() => {
    const fetchData = async () => {
      if (
        selectedGraph1 &&
        selectedGraph2 &&
        selectedExchange1 &&
        selectedExchange2 &&
        selectedCoin &&
        showChart
      ) {
        // Проверка выбранных параметров и состояния showChart
        const response1 = await fetch(
          `https://jellyfish-app-hmfiz.ondigitalocean.app/getDBase/${selectedExchange1}?symbol=${
            selectedCoin.split("-")[0]
          }`
        );
        const response2 = await fetch(
          `https://jellyfish-app-hmfiz.ondigitalocean.app/getDBase/${selectedExchange2}?symbol=${
            selectedCoin.split("-")[0]
          }`
        );
        // const response1 = await fetch(
        //   `http://localhost:8080/getDBase/${selectedExchange1}?symbol=${
        //     selectedCoin.split("-")[0]
        //   }`
        // );
        // const response2 = await fetch(
        //   `http://localhost:8080/getDBase/${selectedExchange2}?symbol=${
        //     selectedCoin.split("-")[0]
        //   }`
        // );
        const data1 = await response1.json();
        const data2 = await response2.json();
        console.log(data1, data2);
        const filteredData1 = data1.data.filter(
          (el) =>
            el[selectedGraph1] &&
            el.date.substring(0, 10) >= fromCalend &&
            el.date.substring(0, 10) <= toCalend
        );
        const filteredData2 = data2.data.filter(
          (el) =>
            el[selectedGraph2] &&
            el.date.substring(0, 10) >= fromCalend &&
            el.date.substring(0, 10) <= toCalend
        );

        const combinedData = filteredData1.map((el, index) => ({
          date: el.date,
          [`${selectedGraph1}_1`]: el[selectedGraph1],
          [`${selectedGraph2}_2`]: filteredData2[index][selectedGraph2],
        }));
        console.log(combinedData);
        setData(combinedData); // Обновление состояния данных для графиков
      }
    };

    fetchData();
  }, [
    selectedGraph1,
    selectedGraph2,
    selectedExchange1,
    selectedExchange2,
    showChart,
    fromCalend,
    toCalend,
    selectedCoin,
  ]); // Зависимости для useEffect, чтобы срабатывал только при изменении этих состояний

  return (
    <div className="Chart-block">
      <ChartForm
        handleGraph1Change={handleGraph1Change}
        handleGraph2Change={handleGraph2Change}
        handleExchange1Change={handleExchange1Change}
        handleExchange2Change={handleExchange2Change}
        handleDrawChart={handleDrawChart}
        handleToCalend={handleToCalend}
        handleFromCalend={handleFromCalend}
        handleCoinChange={handleCoinChange}
      />
      {!showChart && <p>Здесь будут ваши графики</p>}
      {showChart && data.length > 0 && (
        <Chart
          data={data}
          selectedGraph1={`${selectedGraph1}_1`}
          selectedGraph2={`${selectedGraph2}_2`}
        />
      )}
    </div>
  );
}

export default ChartBlock;
