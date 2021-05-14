import React from 'react'

function Coin({name,image,symbol,currentPrice,pricechange,high24hr}) {
    return (
        <div className="coinDiv">
           
            <div className="coindetails">
                <span><img className="coinImage" src={image} alt="coin"/></span>
                <span>  {name}
                <h5>{symbol}</h5></span> 
                <span>₹ {currentPrice}</span>
                <span className="high_24h">₹ {high24hr}</span>
                {pricechange<0?
                <span style={{color:"red",padding:"3px"}}>{pricechange.toFixed(2)}%</span>:
                <span style={{color:"green",padding:"3px"}}>{pricechange.toFixed(2)}%</span>
                }
            </div>
            
        </div>
    )
}

export default Coin
