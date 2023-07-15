import React from "react";
import Exchanges from "./Exchanges";
import logoKucoin from "../img/logo-kucoin.png";
import logoBinance from "../img/logo-binance.png";
import logoHuobi from "../img/logo-huobi.png";
import { useState } from "react";
import "../style/App.scss";
function ExchangesBlock() {
  const targetCoin = localStorage.getItem("targetCoin");
  const [coin, setCoin] = useState(targetCoin ? targetCoin : "BTC-USDT");
  const [click, setClick] = useState(false);
  const trackButton = async () => {
    await fetch(
      `https://jellyfish-app-hmfiz.ondigitalocean.app/change?symbol=${coin}`
    );
  };
  function handleAddrTypeChange(e) {
    setCoin(e.target.value);
    localStorage.setItem("targetCoin", e.target.value);
  }
  function handleAddClick(e) {
    setClick(true);
    setTimeout(() => {
      setClick(false);
    });
  }
  return (
    <>
      <div className="Exchanges-block">
        <Exchanges
          exchanges="binance"
          srcLogo={logoBinance}
          coin={coin}
          click={click}
        />
        <Exchanges
          exchanges="kucoin"
          srcLogo={logoKucoin}
          coin={coin}
          click={click}
        />
        <Exchanges
          exchanges="huobi"
          srcLogo={logoHuobi}
          coin={coin}
          click={click}
        />
      </div>
      <div className="target-block">
        <select defaultValue={coin} onChange={handleAddrTypeChange}>
          <option selected>BTC-USDT</option>
          <option>ETH-USDT</option>
          <option>AVAX-USDT</option>
          <option>MATIC-USDT </option>
          <option>ADA-USDT</option>
          <option>APT-USDT</option>
        </select>
        <button onClick={trackButton}>Следить за монетой</button>
      </div>
    </>
  );
}
export default ExchangesBlock;
