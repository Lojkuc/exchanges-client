import { useState, useEffect } from "react";
import "../style/App.scss";

const fetch = require("node-fetch");

function Exchanges({ exchanges, srcLogo }) {
  const [prices, setPrices] = useState({
    priceBuy1: null,
    priceSell1: null,
    priceBuy5: null,
    priceSell5: null,
    priceBuy10: null,
    priceSell10: null,
  });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          `https://jellyfish-app-hmfiz.ondigitalocean.app/getDBase/${exchanges}`
        );
        const data = await response.json();
        const latestData = data.data[data.data.length - 1];
        setPrices({
          priceBuy1: latestData.order_buy_1,
          priceSell1: latestData.order_sell_1,
          priceBuy5: latestData.order_buy_5,
          priceSell5: latestData.order_sell_5,
          priceBuy10: latestData.order_buy_10,
          priceSell10: latestData.order_sell_10,
        });
      } catch (error) {
        console.error(`Failed to fetch ${exchanges} price:`, error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);

    return () => clearInterval(interval);
  }, [exchanges]);

  return (
    <div className="Exchanges">
      <div className="Exchanges-name">
        <img src={srcLogo} alt="logo" />
        <h2>{exchanges}</h2>
      </div>
      <table className="table">
        <tbody>
          <tr>
            <th></th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
          <tr>
            <th>Order 1</th>
            <td>{prices.priceBuy1}</td>
            <td>{prices.priceSell1}</td>
          </tr>
          <tr>
            <th>Order 5</th>
            <td>{prices.priceBuy5}</td>
            <td>{prices.priceSell5}</td>
          </tr>
          <tr>
            <th>Order 10</th>
            <td>{prices.priceBuy10}</td>
            <td>{prices.priceSell10}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Exchanges;
