$(function(){
   'use strict';
    
    //Preloader Part js
    $(window).on('load', function(){
       $(".preloader").delay(500).fadeOut(500); 
    });
    
    //Sticky Menu js
    $(window).scroll(function(){
       var scrolling = $(this).scrollTop();
        
        if(scrolling > 200){
            $(".navbar").addClass("menu-bg");
        }
        else{
            $(".navbar").removeClass("menu-bg");
        }
        if(scrolling > 100){
            back2top.fadeIn(500);
        }
        else{
            back2top.fadeOut(500);
        }
    });
    
    // Back to top Part js
    var back2top = $(".back-to-top");
    var html_body = $('html,body');
    back2top.click(function(){
        html_body.animate({scrollTop:0},1000);
    });
    
    
    //Smooth Scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });	
    
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
    
    //Service Video js
    jQuery(function(){
      jQuery(".player").YTPlayer();
    });
    
    //Wow js
    new WOW().init();

});