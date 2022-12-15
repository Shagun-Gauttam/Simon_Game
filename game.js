var buttonColours = ["red", "blue","green", "yellow"];
var gamePattern = [];
 var userClickedPattern = [];
 
 var level= 0;
 var start = 0;


  // Game start
  $(document).keypress(function () {
   if(start === 0){
      start = 1;
      nextSequence();   
   
   }
              
});



 function nextSequence() {
  userClickedPattern = [];
   level++;
   $("#level-title").html("Level " + level); 
   var randomNumber = Math.floor(Math.random() * 4);
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
 
   $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
 
 }

$(".btn").click(function(){

   var userChosenColour = $(this).attr("id");

      userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkans(userClickedPattern.length-1);

 } );


function checkans(index){
if(gamePattern[index] === userClickedPattern[index]  ){
   if(userClickedPattern.length === gamePattern.length){
      setTimeout(function() {
         nextSequence();
       }, 1000);
       
   }
  
}
else{
   playSound("wrong");
   $("body").addClass("game-over");
   $("h1").html("Game Over, Press any key to Restart"); 
   setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);

    restart();
    
}
}



 function playSound(name){

      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
      
 };


 
 function animatePress(currentColour){
 
      $("#"+ currentColour ).addClass("pressed");
      setTimeout(function() {
         $("#"+ currentColour).removeClass("pressed");
      }, 100);
      
   
 };

 function restart(){
  gamePattern = [];
 userClickedPattern = [];
  level= 0;
  start = 0;


 }


