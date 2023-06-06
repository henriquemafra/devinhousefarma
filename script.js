// Aumenta e Diminui quantidade de produtos

function increaseQuantity(id) {
    const input = document.getElementById(id);
    let quantity = parseInt(input.value);
    quantity++;
    input.value = quantity;
  }

  function decreaseQuantity(id) {
    const input = document.getElementById(id);
    let quantity = parseInt(input.value);
    if (quantity > 0) {
      quantity--;
    }
    input.value = quantity;
  }



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

