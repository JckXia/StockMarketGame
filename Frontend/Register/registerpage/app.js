$(document).ready(function(){
    var obj={
       name:"",
       weight:2,
      password:"",
      gender:"Female",
      height:4,
      Activity:"Light",
      goals:"Fat_loss",
      age:6
    }
   console.log("Jquery ready");
   $('.UserName').keyup(function(){
      var User=$('.UserName').val();
      //console.log(User);
       //console.log(obj);
       obj.name=User;
   });

    var gender=$('.gender').val();
     $(".gender").change(function(){
         gender=$('.gender').val();
         obj.gender=gender;
    });

    var active=$('.activity').val();
    $(".activity").change(function(){
        active=$('.activity').val();
        obj.Activity=active;
   });

   var goal=$('.goal').val();
   $(".goal").change(function(){
       goal=$('.goal').val();
       obj.goals=goal;
  });


    $('.weight').keyup(function(){
       var weight=$('.weight').val();
       obj.weight=weight;
       console.log(weight);

    });
    $('.password').keyup(function(){
       var pass=$('.password').val();
       obj.password=pass;
       console.log(pass);

    });

    $('.height').keyup(function(){
       var height=$('.height').val();
       obj.height=height;
       console.log(height);

    });
    $('.age').keyup(function(){
       var age=$('.age').val();
       obj.age=age;
       console.log(age);

    });
      //console. log(User);
      $('.register').click(function(){

         $.ajax({
            url:'http://localhost:3000/ninjas/register',
            type:'POST',
            contentType: 'application/json',
            data: JSON.stringify(obj),
            dataType: 'json'
         }).done(Status);

         function Status(data){
              if(data.success==1){
                alert("Registeration successful!");
                window.location.href= '../../Login/loginpage/index.html';
              }else{
                alert("Username already taken, try again!");
              }
         }
      });
       //console.log(obj);

});
