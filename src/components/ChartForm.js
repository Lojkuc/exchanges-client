import React from "react";
import "../style/App.scss";

function ChartForm({
  handleGraphChange,
  handleExchangeChange,
  handleDrawChart,
}) {
  return (
    <form className="Chart-form" method="GET">
      <select
        name="view_graph"
        required="required"
        onChange={handleGraphChange}
      >
        <option value="">Выберите ордер</option>
        <option>order_buy_1</option>
        <option>order_buy_5</option>
        <option>order_buy_10</option>
        <option>order_sell_1</option>
        <option>order_sell_5</option>
        <option>order_sell_10</option>
      </select>
      <select
        name="exchanges_graph"
        required="required"
        onChange={handleExchangeChange}
      >
        <option value="">Выберите платформу</option>
        <option>binance</option>
        <option>kucoin</option>
        <option>huobi</option>
      </select>
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
