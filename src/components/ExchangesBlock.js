import React from "react";
import Exchanges from "./Exchanges";
import logoKucoin from "../img/logo-kucoin.png";
import logoBinance from "../img/logo-binance.png";
import logoHuobi from "../img/logo-huobi.png";
import "../style/App.scss";
function ExchangesBlock() {
  return (
    <div className="Exchanges-block">
      <Exchanges exchanges="binance" srcLogo={logoBinance} />
      <Exchanges exchanges="kucoin" srcLogo={logoKucoin} />
      <Exchanges exchanges="huobi" srcLogo={logoHuobi} />
    </div>
  );
}
export default ExchangesBlock;
