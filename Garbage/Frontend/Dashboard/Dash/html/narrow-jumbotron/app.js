$( document ).ready(function() {
    console.log( "Jquery ready to go" );
    var search=window.location.search;

    var user=[];
    var flag=0;
    for(var i=0;i<search.length;i++){
        if(search[i]=='='){
           flag=1;

        }
        else if(flag){
          user.push(search[i]);
        }
    }
    var userName=user.join("");
     $('.welcome').html(`Welcome,${userName}`);

    //Before this code, i have parsed the url for the username

    //Here, i would need to make a http GET call for user information
    //Then, we would loop across this for infomration
    console.log(userName);
    $.ajax({
      url:`http://localhost:3000/ninjas?name=${userName}`,
      type: 'GET'
    }).done(test);
    function test(data){
      console.log(data);
    }
});
