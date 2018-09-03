import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import SideNav from './SideNavigation'
import CurrentStocks from './CurrentStocks'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
      <span ><span className="credit">Powered By React.js</span><img src={logo} className="App-logo" alt="logo" /></span>
        <h1 className="App-title">Stock Emulator</h1>
    </header>
          <SideNav/>

        <CurrentStocks/>
      </div>
    );
  }
}

export default App;
