$(function () {

    $('.slider').slick({
        prevArrow: '<button class="banner__slider-btn"><img class="banner__img" src="./images/arrow-left.png" alt="arrow-left" ></button>',
        nextArrow: '<button class="banner__slider-btn"><img class="banner__img" src="./images/arrow-right.png" alt="arrow-right" ></button>',
        infinite: true,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
    });

});