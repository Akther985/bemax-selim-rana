$('#mobile-menu-active').meanmenu();({
    meanScreenWidth: "767",
    meanMenuContainer: 'mobile-menu',


});


$('.slider-active').owlCarousel({
   loop:true,
   nav:true,
   dotsEach:true,
      navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
$('.project-active').owlCarousel({
    loop:true,
    nav:true,
    dotsEach:true,
       navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
   responsive:{
       0:{
           items:2
       },
      
    768:{
        items:2
    },
       992:{
           items:2
       },
        
        1000:{
           items:3
       }
   }
 })
 $('.banar-active').owlCarousel({
    loop:true, 
   responsive:{
    576:{
           items:2
       },
       720:{
           items:2
       },
       992:{
        items:5
    },
        1200:{
           items:6
       },
   }
 })
 // popup video options

 $('.popup-video').magnificPopup({
    type: 'iframe'
    
  });
