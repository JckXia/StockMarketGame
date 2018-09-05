import React from 'react'

//import './css/SideNavigation.css'
import logo from './logo.svg'
import {Link} from 'react-router-dom'
import './css/login.css'
class Login extends React.Component{

  render(){



      return(

     <div className="wrap">
        <header className="App-header">
      <span ><span className="credit">Powered By React.js</span><img src={logo} className="App-logo" alt="logo" /></span>
    <h1 className="App-title">YearOfTheBull</h1>
    </header>
       <div className="login">

        <h2 className="login_title">LOGIN</h2>
      <h7 className="Username_subText"><b>Username</b></h7>
      <input role="menu" className="UserName" type="text"  />
    <br/>
  <h7 className="password_subTex"><b>Username</b></h7>
  <input role="menu" className="Password" type="text"/>
<br/>

 
<Link to="/">
  <button role="menu" className="LoginButton" type="text">
    Login
  </button>
</Link>

  <hr/>
<br/>
     <span className="message">Need an Acount? Register now!</span>
   <br/>
 <button role="menu" className="RegisterButton" type="text">Register</button>
       </div>

     </div>
      );
  }
}

export default Login;
