jQuery(document).ready(function() {
  
  /* Fullscreen background */
  $.backstretch([
      "img/backgrounds/1.jpg",
      "img/backgrounds/2.jpg",
      "img/backgrounds/16.jpg"
    ], {duration: 3000, fade: 750});

  /* Wow */
  new WOW().init();
    
});