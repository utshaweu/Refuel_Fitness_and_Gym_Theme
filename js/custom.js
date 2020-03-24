$(function(){
   'use strict';
    
    //Venobox
    $('.venobox').venobox();
    
    //Testimonial Slider js
    $('.testi-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      autoplaySpeed: 2000,
    });
    
    //Client Slider js
    $('.client-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      centerMode:true,
      centerPadding:false,    
      speed: 1500,
      autoplaySpeed: 2500,
    });
    
    //Banner Ripples js
    $("#banner").ripples({
       resolution: 200,
       perturbance: 0.04,
    });
    

});