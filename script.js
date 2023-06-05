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