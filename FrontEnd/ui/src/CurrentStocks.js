import React from 'react'
import './css/currentStocks.css'
class CurrentStocks extends React.Component{

  render(){

      return(
        <div className="container">

        <div className="currentStock">

          <div className="content ticker">GOOGL</div>
        <div className="content currentPrice">10,000</div>
      <div className="content lastPrice">9000</div>
    <div className="content quantity">20</div>
  <div className="content ChangeInPrice">+ 20</div>
        </div>
      </div>
      );
  }
}

export default CurrentStocks;
