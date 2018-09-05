//Project brainstorm

//We will be using the MERN stack,
//Which consists of
//1. Mongodb
//2. Express
//3. React
//4. Node.js

//5.Passport.js??
//Here, we will use React to handle the frontend

//Project outline
//Investing app, which allowa User to maek selections from a wide array of
// stock options
// Data that we keep track of
// Player data should be as follows:
/* Player JSON data
  player{
   name:''
   stocks_purchaed:[
   {label:'Google',
    CurrentCost:'10000',
    CostAtBuyin:'15000',
   YesterdayCost:'9000'
    NumberBought:'40'},
   {}
   ]
  }
*/

//Project flow:

/*
Step 1:
Frontend (REACT):
Subtmit user name and password to backend (We switch to backend here)

Step 2:
Backend (Node.js+mongodb+express+passport.js):
First we check user login creditionals,
IF login has error, we return a json message {information:error},
ELSE return a JSON message in the form
  player{
   name:''
   stocks_purchaed:[
   {label:'Google',
    CurrentCost:'10000',
    CostAtBuyin:'15000',
   YesterdayCost:'9000'
    NumberBought:'40'},
   {}
   ]
  }
To do this, we
//1. After login creditations came through, in the frontend, we make a GET request, for which calculations are done based on existing stocks purchased
//   their currentcost,as well as yesterday's cost
//   -Loop through the stocks_purchased array, for Each label we
//     1. Make request for currentCost of the Stock,set this data as currentCost
//     2. Make request for YesterdayCost ,set this data as YesterdayCost, update the Database
//    Return this packaged json back to the User
 Step3:
Update route???
 Frontend:
 Upon reciving of the data, we display it on screen
 When users search for a stock(another API call needed to make a conversion), we make another
 API call for stock data.
 When user click '+', we need to add the label of the stock , amount purchased as well as the cost at buyin to our API



//Frontend: Submit user name and password to backend,  in the backend, IF we are verified by express, then we
// proceed to return ALL the data via a request, OTHER WISE, we get a ERROR message, in json fomrat {Informatin:error}
/*  vs {information:{
 name:'Jack',
 label:'Google',
 currentCost:4000
}}

*/

// Project deadlines

/*
 Tuesday: Complete login module,set up heroku
Wednesday: Successfully make ajax requests from backend
Thursday: Implement backend logic
Friday:  Design UI, make sure everything is in the right place
Saturday: Link up front and backend

*/

//Frontend // TODO:
/*
 1. Acquire a list of common NASDAQ/NYSE stock ticker symbol
 2. Acquire information onClick of ticker symbol on the side navigation menu
 3. Onclick sell/buy options
 4. Real Time receiving data on the currentStocks side
*/
//Below is a stock ticker symbol look up service
  http://d.yimg.com/autoc.finance.yahoo.com/autoc?lang="English"&query=microsoft&callback=YAHOO.Finance.SymbolSuggest.ssCallback
