import React from "react";
import "../style/App.scss";

function ChartForm({
  handleGraph1Change,
  handleGraph2Change,
  handleExchange1Change,
  handleExchange2Change,
  handleDrawChart,
  handleFromCalend,
  handleToCalend,
  handleCoinChange,
}) {
  return (
    <form className="Chart-form" method="GET">
      <select
        name="view_graph1"
        required="required"
        onChange={handleCoinChange}
      >
        <option value="">Выберите монету</option>
        <option>BTC-USDT</option>
        <option>ETH-USDT</option>
        <option>AVAX-USDT</option>
        <option>MATIC-USDT </option>
        <option>ADA-USDT</option>
        <option>APT-USDT</option>
      </select>
      <select
        name="view_graph1"
        required="required"
        onChange={handleGraph1Change}
      >
        <option value="">Выберите ордер 1</option>
        <option>order_buy_1</option>
        <option>order_buy_5</option>
        <option>order_buy_10</option>
        <option>order_sell_1</option>
        <option>order_sell_5</option>
        <option>order_sell_10</option>
      </select>
      <select
        name="exchange1_graph"
        required="required"
        onChange={handleExchange1Change}
      >
        <option value="">Выберите биржу 1</option>
        <option>binance</option>
        <option>kucoin</option>
        <option>huobi</option>
      </select>
      <select
        name="view_graph2"
        required="required"
        onChange={handleGraph2Change}
      >
        <option value="">Выберите ордер 2</option>
        <option>order_buy_1</option>
        <option>order_buy_5</option>
        <option>order_buy_10</option>
        <option>order_sell_1</option>
        <option>order_sell_5</option>
        <option>order_sell_10</option>
      </select>
      <select
        name="exchange2_graph"
        required="required"
        onChange={handleExchange2Change}
      >
        <option value="">Выберите биржу 2</option>
        <option>binance</option>
        <option>kucoin</option>
        <option>huobi</option>
      </select>
      <div>
        <input type="date" onChange={handleFromCalend}></input>
        <input type="date" onChange={handleToCalend}></input>
      </div>
      <input
        type="submit"
        name="submit_btn"
        value="Нарисовать"
        onClick={handleDrawChart}
      />
    </form>
  );
}

export default ChartForm;
