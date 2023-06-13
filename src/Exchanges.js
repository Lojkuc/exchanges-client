import { useState, useEffect } from "react";
import "./style/App.scss";
const fetch = require("node-fetch");
function Exchanges({ title, exchanges }) {
  const [price, setPrice] = useState(null);
  useEffect(() => {
    // Функция для получения цены с биржи Binance
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          `http://server-exchanges.onrender.com/coinPrice`
        );
        const data = await response.json();
        setPrice(data[`${exchanges}`].price);
      } catch (error) {
        console.error(`Failed to fetch ${exchanges} price:`, error);
      }
    };
    setInterval(() => {
      fetchPrice();
    }, 1000);
  }, []);

  return (
    <div className="Exchanges">
      <h2 className="Exchanges-name">{exchanges}</h2>
      <p className="Exchanges-price">{price}$</p>
    </div>
  );
}

export default Exchanges;
