
  /* Swipper */

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 5,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      }
    }
  });

