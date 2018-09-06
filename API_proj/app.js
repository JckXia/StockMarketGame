var express=require('express');
const routes=require('./routes/api');
const cors=require('cors');

var app=express();

//Require mongoose
var mongoose=require('mongoose');

//connect to mongodb
//Created a database called ninjago
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/ninjago');
mongoose.Promise=global.Promise;

var bodyParser=require('body-parser');

app.use(bodyParser.json());


app.use(cors());
//app uses the routes, which is imported from the routes/api
//initalize routes
app.use(routes);


//Error handling middleware

//listen for requests
var port=process.env.PORT||3000;
app.listen(port,function(){
  console.log("Now listening for requests on port "+port);
});

//Get route
