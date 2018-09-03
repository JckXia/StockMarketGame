import React from 'react'
import escapeRegExp from 'escape-string-regexp'
import {slide as Menu } from 'react-burger-menu'
import './css/SideNavigation.css'

class SideNav extends React.Component{
  state={
    query:""
  }
  updateQuery=(query)=>{
    this.setState({query:query.trim()})
  }
  render(){

  var ShowTicks;
   if(this.state.query){
    const match=new RegExp(escapeRegExp(this.state.query),'i')
     ShowTicks=this.props.Ticker.filter((stock)=>match.test(stock.AABA));
   }else{
     ShowTicks=this.props.Ticker;
   }

      return(
               <Menu>
               <h1>Stocks</h1>
              <input role="menu" onChange={event=>this.updateQuery(event.target.value)}type="text" className="filter"  placeholder="Ex:6 flags"/>
            {ShowTicks.map((data,i)=>
              <div key={i}>
              <a className="stock">{data.AABA}</a>
              <div className="space"></div>
              </div>
            )
            }
         </Menu>

      );
  }
}

export default SideNav;
