$(document).ready(function(){

  //Reveal menu nav
  $("#menu div").on("click", function(){
    $("#menu_list").slideToggle();
  });//end menu reveal


  //Expand each section to show descriptions
  $("section header").on("click", function(){
    var $sibs = $(this).siblings();
    $sibs.slideToggle();
  }); // end expand

}); //end ready