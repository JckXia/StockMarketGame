//var bcrypt=require('bcrypt');
const express = require ('express');
 //var passwordHash=require('password-hash');
const router = express.Router();
var passwordHash = require('password-hash');
const Ninja = require('../models/ninja');
var MongoClient = require('mongodb').MongoClient;
const jwt=require('jsonwebtoken');
const passport=require('passport');
require('../config/passport')(passport);
var request=require('request');

 //BFK2DZWUB5348EUX

 //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=YAHOO&apikey=BFK2DZWUB5348EUX
 function getStringDate(aDate,Yesterday){
       var dd = aDate;
       var yy = dd.getYear();
       var mm = dd.getMonth() + 1;
       var hour=dd.getHours();
       var minute=dd.getMinutes();

       //We want the previous day's closing cost
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


function AlphaVantage(stockSymbol){
  var current;
  var date=new Date();
   var Yesterday=getStringDate(date,1);
 return new Promise( function(resolve,reject){
  request.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+stockSymbol+'&outputsize=full&interval=1min&apikey=BFK2DZWUB5348EUX', function (error, response, body) {
    if (!error && response.statusCode == 200) {

      let data=JSON.parse(body);
      var LastRefresh=data['Meta Data']['3. Last Refreshed'];
      var YesterdayData=data['Time Series (1min)'][Yesterday];
      console.log(YesterdayData);
    resolve(OHLC(data["Time Series (1min)"][LastRefresh]));
    }else{
      reject(error);
    }
  });
});


}

async function APIWrap(stockSymbol){
  let res=await AlphaVantage(stockSymbol);
 return res;
}

function AsyncStockHelper(user,res){
  var date=new Date();
  var today=getStringDate(date,0);
  var Yesterday=getStringDate(date,1);
  //console.log(today);
//  console.log(Yesterday);
var stocks=user.stocks_purchased;
     var pending=stocks.length;
 stocks.forEach(function(item,i){


      //console.log(item.label);

   APIWrap(item.label).then(function(stockData){
         pending--;
     stocks[i].currentCost=stockData;
     if(pending==0){
      // console.log('OK');
       res.send(user);
      // console.log(user);
     }
   });
 });


  //OHLC average OPEN+HIGH+LOW+CLOSE
  //console.log(stocks[0].currentCost);



}
router.get('/ninjas',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
  //This block is part of the calling api iwith node.js business

  AsyncStockHelper(req.user,res);
//  console.log(req.user.stocks_purchased);
  //res.json({user:req.user})
});




//Login route
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
                // const token=jwt.sign(user,'secret');


               } else{
                 console.log('Test');
                 res.json({success:0,msg:'Wrong password fam'});
               }

          }else{
    //User does not exist, return to frontend the information that user DNE
            res.json({success:0,msg:'Wrong username fam'});
          }
  })  ;

});


 //Register route
router.post('/ninjas/register', function(req, res){
    // console.log("exist")
    //The below function finds if the user exists in the database

  Ninja.findOne({name:req.body.name},function(err,user){
          if(err) throw err;
          if(user){
            console.log("exist");
            res.send({success:0,msg:'User already exists'});

          } else{


        req.body.password=passwordHash.generate(req.body.password);
        console.log(req.body.password);
            //  console.log("password "+req.body.password);
              Ninja.create(req.body).then(function(ninja){
                  // console.log(req.body.rank);
                           res.json(ninja);

              });

          }
      });


});



// update route
router.put('/ninjas/:id', function(req, res, next){

    Ninja.findOneAndUpdate({name: req.params.id}, req.body.age).then(function(){

        Ninja.findOne({name: req.params.id}).then(function(ninja){

            res.send(ninja);

        });

    }).catch(next);

});

//


//Delete route
router.delete('/ninjas/:id', function(req, res){

    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
      res.send(ninja);
    });
  //  res.send({type: 'DELETE'});

});



module.exports = router;
