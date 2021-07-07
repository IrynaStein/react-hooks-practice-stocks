import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [filter, setFilter] = useState("Tech")
  const [sort, setSort] = useState("")
  const [purchased, setPurchased] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(resp => resp.json())
      .then(data => setStocks(data))
  }, [])

  function onFilterChange(filterTerm) {
    setFilter(filterTerm)
  }

  function onSortChange(e) {
    setSort(e.target.value)
  }

  function onPurchase(stock) {
    console.log(stock.id)
    const addedStocks = purchased.find((purchase) => stock.id === purchase.id)
    if (!addedStocks){
      setPurchased([...purchased, stock])
    }
  }

  function onDelete(soldStock) {
   setPurchased(mUV => mUV.filter((purchase) => purchase.id !== soldStock.id))
  }

  const filteredStocks = stocks
    .filter(stock => stock.type === filter)
    .sort((stock1, stock2) => {
      if (sort === "Alphabetically") {
        return stock1.name > stock2.name ? 1 : -1
      }
      else if (sort === "Price") {
        return stock1.price < stock2.price ? 1 : -1
      }
      else {
        return stocks
      }
    })


  return (
    <div>
      <SearchBar onFilterChange={onFilterChange} onSortChange={onSortChange} sort={sort} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onPurchase={onPurchase} />
        </div>
        <div className="col-4">
          <PortfolioContainer purchased={purchased} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
