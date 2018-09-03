import React from 'react'
import './css/currentStocks.css'
import sell from './sell.svg';
import buy from './buy.svg';
class CurrentStocks extends React.Component{

  render(){

      return(
        <div className="container">
         <div className="label">

           <div className="lab symbol">Tick
           </div>
           <div className="lab price">Current Price</div>
         <div className="lab Yesterday">Yesterday Close</div>
       <div className="lab quant">Bought</div>
     <div className="lab Change">Change</div>
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
