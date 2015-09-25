$(document).ready(function(){
  $('#welcome').fadeIn(1600).fadeOut(2500);

    $("#menuIcon").mouseenter(function(){
        $("#menuIcon").hide();  $('#nav').fadeIn('slow').mouseleave(function(){
        $("#nav").fadeOut("slow");
        $("#menuIcon").show(300);
            }); //end nav mouseLeave
    }); //end icon mouseenter
});//end ready

