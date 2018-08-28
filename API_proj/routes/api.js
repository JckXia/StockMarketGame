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


// get a list of ninjas from the db
router.get('/ninjas',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
  res.json({user:req.user})
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
            console.log("negative");

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
