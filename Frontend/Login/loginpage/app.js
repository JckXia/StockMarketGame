var obj={
   name:"K",
   password:"",
    'content-type':'application/json'
}
//console.log(obj.name);
var User;
$(document).ready(function(e) {
     $('.UserName').keyup(function(){
        User=$('.UserName').val();
        obj.name=User;
           //console.log(obj);
     });

     //Testing the GET route



     $('.PassWord').keyup(function(){
       var Pass=$('.PassWord').val();
        obj.password=Pass;
           //console.log(obj);
     });
     //Login procedure
     $(".login").click(function(){
       $.ajax({
            url: 'http://localhost:3000/ninjas/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(obj),
            dataType: 'json'
        }).done(Local);
  //console.log(User);
        function Local(data){
          console.log(data.true);
           if(data.true==1){

              //Successfully implemented authentication
              //Problem ->How to grab user information to another script source
          //console.log(User);
           window.location.href=  `../../Dashboard/Dash/html/narrow-jumbotron/index.html?User=${User}`;
           } else{
             alert("Wrong password/user name");
           }
          //console.log(data);
        }
     });
 });
