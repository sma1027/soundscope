$(document).ready(function() {
  
  /* fullscreen background */
  $('body').backstretch([
      "img/backgrounds/1.jpg",
      "img/backgrounds/2.jpg",
      "img/backgrounds/16.jpg",
      "img/backgrounds/3.jpg",
      "img/backgrounds/10.jpg",
    ], {duration: 3000, fade: 750});

  /* wow */
  new WOW().init();
    
  /* countdown */
  $('.timer').countdown("02/21/2015 12:00:00", function(event){
    // debugger;
    $('.release-date').html(event.finalDate.toDateString());
    // $('.month').html(event.finalDate.getMonth()+1);
    // $('.date').html(event.finalDate.getDate());
    // $('.year').html(event.finalDate.getFullYear());
    // $('.weeks').html(event.strftime('%w'));
    // $('.days').html(event.strftime('%d'));
    $('.days').html(event.strftime('%D'));
    $('.hours').html(event.strftime('%H'))
    $('.minutes').html(event.strftime('%M'));
    $('.seconds').html(event.strftime('%S'));
  });

});