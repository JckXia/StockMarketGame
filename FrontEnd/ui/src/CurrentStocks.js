import React from 'react'
import './css/currentStocks.css'
import sell from './sell.svg';
import buy from './buy.svg';
class CurrentStocks extends React.Component{

  render(){

      return(
        <div className="container">

         <div className="label">

           <span className="content ticker">Tick</span>
           <span className="content currentPrice">CurrentPrice</span>
          <span className="content lastPrice">YesterdayClose</span>
          <span className="content quantity">Bought</span>
          <span className="content ChangeInPrice">Change</span>

         </div>
        <div className="currentStock">

          <span className="content ticker">GOOGL</span>
          <span className="content currentPrice">10000</span>
         <span className="content lastPrice">90000</span>
         <span className="content quantity">20</span>
         <span className="content ChangeInPrice">+ 20</span>
         <span><img className="content sell" src={sell} alt="sell"/></span>
         <span><img className="content buy" src={buy} alt="buy"/></span>
        </div>
        <div className="currentStock">

          <span className="content ticker">K</span>
          <span className="content currentPrice">10000</span>
         <span className="content lastPrice">90000</span>
         <span className="content quantity">20</span>
         <span className="content ChangeInPrice">+ 20</span>
         <span><img className="content sell" src={sell} alt="sell"/></span>
         <span><img className="content buy" src={buy} alt="buy"/></span>
        </div>
        <div className="currentStock">

          <span className="content ticker">APPL</span>
          <span className="content currentPrice">10000</span>
         <span className="content lastPrice">90000</span>
         <span className="content quantity">20</span>
         <span className="content ChangeInPrice">+ 20</span>
         <span><img className="content sell" src={sell} alt="sell"/></span>
         <span><img className="content buy" src={buy} alt="buy"/></span>
        </div>
        <div className="currentStock">

          <span className="content ticker">MSFT</span>
          <span className="content currentPrice">10000</span>
         <span className="content lastPrice">90000</span>
         <span className="content quantity">20</span>
         <span className="content ChangeInPrice">+ 20</span>
         <span><img className="content sell" src={sell} alt="sell"/></span>
         <span><img className="content buy" src={buy} alt="buy"/></span>
        </div>




      </div>
      );
  }
}

export default CurrentStocks;
