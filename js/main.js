$(function () {
  
  $(".our-trip__slider").slick({
    prevArrow:
      '<button type="button" class= "slick-btn slick-prev" ><img src="img/arrow-prev.svg" alt=""></button> ',
    nextArrow:
      '<button type="button" class= "slick-btn slick-next" ><img src="img/arrow-next.svg" alt=""></button> ',
    autoplay: true,
    fade: true,
    responsive: {
      breakpoint: 601,
      settings: {
        arrows: false,
      },
    },
  });
});
