import React from 'react'
import {slide as Menu } from 'react-burger-menu'
import './css/SideNavigation.css'
class SideNav extends React.Component{

  render(){

      return(
               <Menu>
           
              <input role="menu" type="text" className="filter"  placeholder="Ex:6 flags"/>
            <a className="stock" onClick={()=>{console.log('Hi')}}>GOOGL</a>
          <div className="space"> </div>

        <a className="stock" onClick={()=>{console.log('Hi')}}>MSFT</a>
        <div className="space"> </div>

      <a className="stock" onClick={()=>{console.log('Hi')}}>APPL</a>
      <div className="space"> </div>


         </Menu>

      );
  }
}

export default SideNav;
