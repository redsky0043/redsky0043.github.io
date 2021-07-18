document.addEventListener('DOMContentLoaded', () => {
  const swiperIMG = new Swiper('.slider-img', {
    loop: false,
    speed: 2400,
    parallax: true,
    pagination: {
      el: '.slider-pagination-counter .total',
      type: 'custom',
      renderCustom: function(swiper, current, total) {
        let totalRes = total >= 10 ? total : `0${total}`
        return totalRes
      }
    },
  })

  const swiperText = new Swiper('.slider-text', {
    loop: false,
    speed: 2400,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }
  })

  swiperIMG.controller.control = swiperText;
  swiperText.controller.control = swiperIMG;

  let clock = document.querySelector('.slider-clock__arrow');
  let clockSm = document.querySelector('.slider-clock__arrow-sm');

  swiperText.on('slideNextTransitionStart', function() {
    gsap.to(clock, 2.8, {
      rotation: '+=360',
      ease: Power2.easeOut
    });
    gsap.to(clockSm, 2.8, {
      rotation: '+=30',
      ease: Power2.easeOut
    });
  })

  swiperText.on('slidePrevTransitionStart', function() {
    gsap.to(clock, 2.8, {
      rotation: '-=360',
      ease: Power2.easeOut
    });
    gsap.to(clockSm, 2.8, {
      rotation: '-=30',
      ease: Power2.easeOut
    });
  })

  const curNum = document.querySelector('.slider-pagination-counter .current');
  const pagCur = document.querySelector('.slider-pagination-current__num');

  swiperText.on('slideChange', function() {
    let index = swiperText.realIndex + 1;
    let indRes = index >= 10 ? index : `0${index}`;

    gsap.to(curNum, 0.2, {
      force3D: true,
      y: -10,
      opacity: 0,
      ease: Power2.easeOut,
      onComplete: function() {
        gsap.to(curNum, 0.1, {
          force3D: true,
          y: 10,
        });
        curNum.innerHTML = indRes;
        pagCur.innerHTML = indRes;
      }
    });

    gsap.to(curNum, 0.2, {
      force3D: true,
      y: 0,
      opacity: 1,
      ease: Power2.easeOut,
      delay: 0.3,
    })
  })

})