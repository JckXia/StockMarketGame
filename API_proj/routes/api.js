const express = require ('express');
const router = express.Router();
var passwordHash = require('password-hash');
const Ninja = require('../models/ninja');
var MongoClient = require('mongodb').MongoClient;
const jwt=require('jsonwebtoken');
const passport=require('passport');
require('../config/passport')(passport);
var request=require('request');

var cache=[];
 //This project sees the use of the AlphaVantage API
 //BFK2DZWUB5348EUX
 //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=YAHOO&apikey=BFK2DZWUB5348EUX

//The getStringDate function is used to retrieve current time, needed to request stock info
 function getStringDate(aDate,Yesterday){
       var dd = aDate;
       var yy = dd.getYear();
       var mm = dd.getMonth() + 1;
       var hour=dd.getHours();
       var minute=dd.getMinutes();


        if(Yesterday){
          hour=15;
          minute=59;
        }
       dd = dd.getDate()-Yesterday;
       if (yy < 2000) { yy += 1900; }
       if (mm < 10) { mm = "0" + mm; }
       if (dd < 10) { dd = "0" + dd; }
       var rs = yy + "-" + mm + "-" + dd+" "+hour+":"+minute+":00";
       return rs;
   }


 /*OHLC calculates the OHLC of the stock info, which is a calculation of the form
  (low+high+open+close)/4 */
function OHLC (data){
  var res=0;
  for(var key in data){
     if(key!=='5. volume'){
     res+= parseFloat(data[key]);
   }
  }
  res=res/4;
  return res;
}


//The AlphaVantage function takes a stockSymbol and return a promise,
// containing information acquired from the API call
function AlphaVantage(stockSymbol){
  var current;
  var date=new Date();
   var Yesterday=getStringDate(date,1);
 return new Promise( function(resolve,reject){
  request.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+stockSymbol+'&outputsize=full&interval=1min&apikey=BFK2DZWUB5348EUX', function (error, response, body) {
    if (!error && response.statusCode == 200) {

      let data=JSON.parse(body);
      if(!data['Meta Data']){
        console.log('Reading from cache');
        console.log(stockSymbol);
        //If we have exceeded our data limit, we need to use our cache, which is in this form
        // [{"tick":GOOGL,"current":1000,"yesterday":200},{"tick":MSFT,"curret":10,"yesterday":50}]
        // We loop through cache, until we have found the stock symbol, then set the
        // variabels latestData and YesterdayData and resolve it
          var YesterdayData;
          var latestData;
         for(var i=0;i<cache.length;i++){
           if(cache[i].tick==stockSymbol){

             YesterdayData=cache[i].yesterday;

              latestData=cache[i].current;
              break;


           }
         }
           resolve({"current":latestData,"yesterday":YesterdayData});

      } else{
        console.log('Hit');

      var LastRefresh=data['Meta Data']['3. Last Refreshed'];
      var YesterdayData=OHLC(data['Time Series (1min)'][Yesterday]);
      var latestData=OHLC(data['Time Series (1min)'][LastRefresh]);
        //Here, we need to check, if the tickerre exists in the cache
        var flag=1;
        //Here, if AlphaVantage API became active again, we update the cache
        //info
      for(var i=0;i<cache.length;i++){
        if(cache[i].tick==stockSymbol){
           cache[i].current=latestData;
           cache[i].yesterday=YesterdayData;
           flag=0;
        }
      }
      //We push if and only if the tick has never been bought by the user 
      if(flag){
        cache.push({"tick":stockSymbol,"current":latestData,"yesterday":YesterdayData});
      }
    //cache.push({"tick":stockSymbol,"current":latestData,"yesterday":YesterdayData}
    resolve({"current":latestData,"yesterday":YesterdayData});
  }

    }else{
      reject(error);
    }
  });
});
}

 //APIWrap is an Wrapper, where it acquires data from the AlphaVantage
 //function, and returns information regarding stocks
async function APIWrap(stockSymbol){
  let res=await AlphaVantage(stockSymbol);
 return res;
}

/*
  AsyncStockHelper takes a user, a response ,it resolves
  information obtained by the APIWrap function, Updates the mongodb
  and returns the information back to the Client
*/
function AsyncStockHelper(user,res){

  var date=new Date();
  var today=getStringDate(date,0);
  var Yesterday=getStringDate(date,1);


var stocks=user.stocks_purchased;
var pending=stocks.length;

 stocks.forEach(function(item,i){

   APIWrap(item.label).then(function(stockData){

         pending--;

     stocks[i].currentCost=stockData.current;
     stocks[i].YesterdayCost=stockData.yesterday;



    //Upon recieivng new Data, we update our database.
     Ninja.update(
       {_id:user._id},
       {"$set":{'stocks_purchased.$[i].currentCost':stockData.current,'stocks_purchased.$[i].YesterdayCost':stockData.yesterday}},
       {arrayFilters: [{"i.label": item.label}]}
     ).then(function(user){

     });

     if(pending==0){
       //When there is no more item in the stocks_purchased array,
       //return the user
       res.send(user);

     }
   });
 });


}

//Get route, acquiring data with regards to the user. The route is secured
//by passport-jwt
router.get('/ninjas',passport.authenticate('jwt',{session:false}),(req,res,next)=>{

   if(req.user["stocks_purchased"]&&req.user["stocks_purchased"].length>=1){
  AsyncStockHelper(req.user,res);
} else{
  res.send(req.user);
}

});


//Update request examples
/*
{
  "name":"Al",
  "stock_symbol":"AAPL",
  "quantity":30
}
*/

//Update route, used to update userInfo,secured with passport-jwt.
router.put('/ninjas/update',passport.authenticate('jwt',{session:false}),function(req,res){
 Ninja.findOne({name:req.body.name},function(err,user){
    if(err) throw err;
    if(user){
       console.log(user);
       var stocks=user.stocks_purchased;
       var tick=req.body.label;
       for(var i=0;i<stocks.length;i++){
          if(stocks[i].label==tick){

                console.log(tick);
                stocks[i].NumbersBought+=req.body.quantity;
                Ninja.update(
                  {_id:user._id},
                  {"$set":{'stocks_purchased.$[i].NumbersBought':stocks[i].NumbersBought}},
                  {arrayFilters: [{"i.label": tick}]}
                ).then(function(user){

                });
                res.send(user);
              return;
          }
       }

      APIWrap(req.body.label).then(function(data){
        var newStockInfo={
          "label":req.body.label,
          "currentCost":data.current,
          "YesterdayCost":data.yesterday,
          "NumbersBought":req.body.quantity
        }
      Ninja.update({
      _id : user._id
    },{
      $push: {"stocks_purchased": {label:req.body.label,currentCost:data.current,YesterdayCost:data.yesterday,NumbersBought:req.body.quantity}}
    }).then(function(ok){
      console.log(ok);
    });



        user.stocks_purchased.push(newStockInfo);

            res.send(user);
      });

    }
  });

});


//Login route.Here, the password is checked
//with passwordHash.In addition, a jwt token representing the user
//is returned to the client,for making GET request.
router.post('/ninjas/login',function(req,res){
  Ninja.findOne({name:req.body.name},function(err,user){
          if(err) throw err;
          if(user){
               if(passwordHash.verify(req.body.password,user.password)){
                const token=jwt.sign(JSON.stringify(user),'secret');

                 res.send({
                   success:true,
                   token:'JWT '+token,
                   user:{
                     name:user.name
                   }
                 });

               } else{
                 console.log('Test');
                 res.json({success:0,msg:'Wrong password fam'});
               }

          }else{
            res.json({success:0,msg:'Wrong username fam'});
          }
  })  ;

});


//The register route takes in user name and password, hashes
//the password and updates the database. Checks are done
//to ensure that the username has not been registered already
router.post('/ninjas/register', function(req, res){


  Ninja.findOne({name:req.body.name},function(err,user){
          if(err) throw err;
          if(user){
            console.log("exist");
            res.send({success:0,msg:'User already exists'});

          } else{


        req.body.password=passwordHash.generate(req.body.password);
        console.log(req.body.password);
              Ninja.create(req.body).then(function(ninja){
                           res.json(ninja);

              });

          }
      });


});


//Delete route(future updates)
router.delete('/ninjas/:id', function(req, res){

    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
      res.send(ninja);
    });
  //  res.send({type: 'DELETE'});

});



module.exports = router;
