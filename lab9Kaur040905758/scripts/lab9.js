$(document).ready(function( ) {
    $("h1").text("lab 9")

    var newItem = $("<h3>Working with jQuery</h3>");
     $("#header").html(newItem);

     $("input[type='button']").each(function(index, element){
           $(element).addClass("btn-background");
 });
  $("#buttons").addClass("red-border");

  $("p").each(function(index, element){
         $(element).addClass("blue");
});

$("#first").on("click", function(){
   $("p:first").addClass("green-border");
 });

 $("#last").on("click", function(){
     $("p:last").addClass("orange-border");
 });

 $("#prev").on("click", function(){
     $("#para3").addClass("purple-border");
 });

 $("#next").on("click", function(){
        $("#para2").next().addClass("yellow-border");
  });

  $("#remove").on("click", function(){
       $("#footer").remove();
   });

});
