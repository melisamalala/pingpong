// JavaScript business logic

var numbersToBePingPonged = [];

function pingPong(number){
    for (var index = 1; index <= number; index +=1){
      if(index % 15 === 0){
        numbersToBePingPonged.push("pingpong");
      }
      else if(index % 3 === 0){
        numbersToBePingPonged.push("ping");
      }
      else if(index % 5 === 0){
        numbersToBePingPonged.push("pong");
      }
      else{
        numbersToBePingPonged.push(index);
      }
    }
  }

// User interface logic

$(document).ready(function(){
   $("form#willitpong").submit(function(){
      event.preventDefault();
      var number = parseInt($("input#number").val());

      pingPong(number);
       
      numbersToBePingponged.forEach(function(number){
         $("#output").append('<li>' + number + "</li>");
      });
   });
});
