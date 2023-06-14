import { useState, useEffect } from "react";
import "./style/App.scss";
const fetch = require("node-fetch");
function Exchanges({ title, exchanges, srcLogo }) {
  const [price, setPrice] = useState(null);
  useEffect(() => {
    // Функция для получения цены с биржи Binance
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          `https://server-exchanges.onrender.com/coinPrice`
        );
        const data = await response.json();
        setPrice(data[`${exchanges}`].price);
      } catch (error) {
        console.error("Failed to fetch Binance price:", error);
      }
    };
    setInterval(() => {
      fetchPrice();
    }, 1000);
  }, []);

  return (
    <div className="Exchanges">
      <div className="Exchanges-name">
        <img src={srcLogo} alt="logo" />
        <h2>{exchanges}</h2>
      </div>
      <p className="Exchanges-price">Futures price: {price} $</p>
    </div>
  );
}

export default Exchanges;
