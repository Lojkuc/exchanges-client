import React from "react";
import ExchangesBlock from "./components/ExchangesBlock";
import ChartBlock from "./components/ChartBlock";
import "./style/App.scss";
function App() {
  return (
    <div className="App">
      <ExchangesBlock />
      <ChartBlock />
    </div>
  );
}

export default App;
