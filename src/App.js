import './App.css';
import React, { useEffect, useState } from "react";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")
// fetching data from API 
  useEffect(() => {
    setInterval(() => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(res => res.json())
        .then(results => {
          setCoins(results)
        }).catch(error => console.log(error))
    }, 5000)

  }, [])
  // onChange method
  let handleChange = (e) => {
    setSearch(e.target.value)
  }
  // Filtering coins 
  const filtredCoin = coins.filter(coins => {
    return coins.name.toLowerCase().includes(search.toLowerCase());
  })
  return (
    <div className="App">
      <div className="header">
        <span className="logo"><h1>Crypto-World</h1></span>
        <div className="searchContainer"> <h4>Search your coin here</h4>
          <input
            type="text"
            className="searchBox"
            placeholder="search"
            value={search}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="coinsList">
        <div className="headings ">
          <span>coin</span>
          <span>Symbol</span>
          <span>Price</span>
          <span className="high_24h">24h-High</span>
          <span>Change</span>
        </div>
        {filtredCoin.map((coin, index) => {
          return <Coin
            key={index}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            currentPrice={coin.current_price}
            pricechange={coin.price_change_percentage_24h}
            high24hr={coin.high_24h}
          />
        })}
      </div>
    </div>
  );
}

export default App;
