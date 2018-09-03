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

          <div className="content ticker">GOOGL</div>
        <div className="content currentPrice">10,000</div>
      <div className="content lastPrice">9000</div>
    <div className="content quantity">20</div>
  <div className="content ChangeInPrice">+ 20</div>
<img className="content sell" src={sell} />
<img className="content buy" src={buy}/>
        </div>
        <div className="currentStock">

          <div className="content ticker">MSFT</div>
        <div className="content currentPrice">10,000</div>
      <div className="content lastPrice">9000</div>
    <div className="content quantity">20</div>
  <div className="content ChangeInPrice">+ 20</div>
<img className="content sell" src={sell} />
<img className="content buy" src={buy}/>
        </div>
        <div className="currentStock">

          <div className="content ticker">APPL</div>
        <div className="content currentPrice">10,000</div>
      <div className="content lastPrice">9000</div>
    <div className="content quantity">20</div>
  <div className="content ChangeInPrice">+ 20</div>
<img className="content sell" src={sell} />
<img className="content buy" src={buy}/>
        </div>
         
      </div>
      );
  }
}

export default CurrentStocks;
