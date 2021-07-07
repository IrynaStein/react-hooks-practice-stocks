import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onPurchase}) {

  const renderStocks = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} handleClick={onPurchase}/>
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
