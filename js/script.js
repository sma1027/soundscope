$(document).ready(function() {
  
  /* fullscreen background */
  $('body').backstretch([
      "img/backgrounds/1.jpg",
      "img/backgrounds/2.jpg",
      "img/backgrounds/16.jpg"
    ], {duration: 3000, fade: 750});

  /* wow */
  new WOW().init();
    
  /* countdown */
  $('.timer').countdown("2015/01/31", function(event){
    $(this).text(
      event.strftime('%D %H hours %M minutes %S seconds')
    );
  });

});