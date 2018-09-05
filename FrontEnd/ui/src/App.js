import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import SideNav from './SideNavigation'
import CurrentStocks from './CurrentStocks'
import Login from './login'
 import data from './Ticks.json'
 import {Link} from 'react-router-dom'
 import {Route} from 'react-router-dom'
class App extends Component {
  state={
    Ticker:data
  }


  render() {

    return (
      <div className="App">

    <Route exact path="/" render={()=>(
        <div>
      <header className="App-header">
    <span ><span className="credit">Powered By React.js</span><img src={logo} className="App-logo" alt="logo" /></span>
  <h1 className="App-title">YearOfTheBull</h1>
  </header>
        <SideNav Ticker={this.state.Ticker}/>

      <CurrentStocks/>

  </div>
      )}/>
    <Route path="/login" render={()=>(
   
      <Login />

     )}/>

 </div>
    );
  }
}

export default App;
