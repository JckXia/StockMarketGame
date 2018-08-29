var mongoose=require('mongoose');
var Schema=mongoose.Schema;
/*
"geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },

*/
//Create geolocation Schema
const GeoSchem=new Schema({
  type:{
    type:"String",
    default:"Point"
  },
  coordinates:{
    type:[Number],
     index:"2dsphere"
  }
});
//Create ninja schema and model
const NinjaSchema=new Schema({
  name:{
    type:String,
    required:[true,'Name fieldis required']
  },
  password:{
     type:String,
     required:[true,'Pass word is required']
  },
  stocks_purchased:{
    type:Array
  }

  //Add in geo location
});


//We have created our model
const Ninja=mongoose.model('ninja',NinjaSchema);


//Export the model to be used in all files

module.exports=Ninja;
