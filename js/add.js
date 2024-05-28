function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cart = getCart();
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <p>${item.name}</p>
        <button onclick="removeFromCart(${index})">Xóa</button>
      `;
      cartItems.appendChild(itemDiv);
    });
  }

  function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    displayCart();
  }

  document.addEventListener('DOMContentLoaded', displayCart);