$(document).ready(function(){
   console.log("All systems go");
});


(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
        console.log("clicked");

//Testing POST request


//  https://healthylyfe.herokuapp.com/ninjas/login



 var object={
   name:"Adf",
   password:"14050079xJ",
   'content-type':'application/json'
 }




    //Open ajax requestdb
    $.ajax({
      //Search for an item in the query bar
      url:`https://api.nal.usda.gov/ndb/search/?format=json&q=${searchedForText}&api_key=SlZR87K9YlshvZvRr5AILE9tFJO3HndBXLMBS0tE`



    // url:'https://api.nal.usda.gov/ndb/V2/reports?ndbno=45059050&type=b&format=json&api_key=SlZR87K9YlshvZvRr5AILE9tFJO3HndBXLMBS0tE'
    }).done(food);

    function randomIntFromInterval(min,max){
      return Math.floor(Math.random()*(max-min+1)+min);
    }




    function food(data){

      var a=[];

      for(var i=0;i<10;i++){
        var k=randomIntFromInterval(1,20);
        a.push(data.list.item[k].ndbno);
      }
      for(var i=0;i<a.length;i++){
        $.ajax({
          //Search for an item in the query bar
        ///We want the value per 100 g
         url:`https://api.nal.usda.gov/ndb/reports/?ndbno=${a[i]}&type=b&format=json&api_key=SlZR87K9YlshvZvRr5AILE9tFJO3HndBXLMBS0tE`
       }).done(rock);
      }
      function rock(data){

       console.log(data.report.food.name);
       console.log(data.report.food.nutrients);

      }
    }

    //console.log(arr);
//https://api.nal.usda.gov/ndb/V2/reports?type=b&api_key=SlZR87K9YlshvZvRr5AILE9tFJO3HndBXLMBS0tE


    });

})();
