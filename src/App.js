import Exchanges from "./Exchanges";
import "./style/App.scss";
function App() {
  return (
    <div className="App">
//       <Exchanges exchanges="binance" />
      <Exchanges exchanges="kucoin" />
      <Exchanges exchanges="huobi" />
    </div>
  );
}

export default App;
