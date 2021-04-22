$(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });
  $(".slider-nav").slick({
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""></button>',
    asNavFor: '.slider-for',
    fade: false,
    arrows: true,
    infinite: true,
    dots: true,
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: false,
    swipe:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});