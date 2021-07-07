import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ purchased, onDelete }) {
  console.log(purchased)

  // const renderPurchasedStocks = purchased.map((purchase) => (
  //   <div key={purchase.id}>
  //     <div className="card" onClick={()=>onDelete(purchase)}>
  //       <div className="card-body">
  //         <h5 className="card-title">{purchase.name}</h5>
  //         <p className="card-text">{purchase.ticker}:{purchase.price}</p>
  //       </div>
  //     </div>
  //   </div>
  // ))

  const renderPurchasedStocks = purchased.map((purchase) => (
    <Stock key={purchase.id} stock={purchase} handleClick={onDelete}/>
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderPurchasedStocks}
    </div>
  );
}

export default PortfolioContainer;
