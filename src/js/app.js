$(document).ready(function(){
   
   $('.slider').slick({
      dots: false,
      arrows: true,
      initialSlide: 1,
      autoplay: true,
      speed: 1200,
      pouseOnFocus: true,
      draggable: false,
      appendArrows: $('.slider__arrows'),
   });

   $('.clients__slider').slick({
      dots: false,
      arrows: true,
      initialSlide: 1,
      autoplay: true,
      speed: 1200,
      pouseOnFocus: true,
      draggable: false,
      appendArrows: $('.clients__slider-arrows'),
      responsive: [
         {
            breackpoint: "768",
            settings: {
               draggable: true,
            }
         }
      ]
   });

   $(".price__tabs-item").click(function(event){
      event.preventDefault();

      $('.price__tabs-item').removeClass("price__tabs-item-active");
      $(this).addClass("price__tabs-item-active");

      $('.price__tabs-content').removeClass("price__tabs-content-active");
      $($(this).attr("href")).addClass("price__tabs-content-active");
   });

});


