function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
  const cartItems = document.getElementById('cartItems');
  const totalPriceElem = document.getElementById('totalPrice');
  const cart = getCart();
  cartItems.innerHTML = '';
  let totalPrice = 0;
  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    totalPrice += item.price * item.quantity;
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <p>${item.name} - $${item.price}</p>
      <div class="quantity-control">
        <button onclick="changeQuantity(${index}, -1)">-</button>
        <span style = "margin: 0 10px 0 10px">${item.quantity}</span>
        <button onclick="changeQuantity(${index}, 1)">+</button>
      </div>
      <button onclick="removeFromCart(${index})" class = "xoa">Xóa</button>
    `;
    cartItems.appendChild(itemDiv);
  });
  totalPriceElem.textContent = `Total: $${totalPrice}`;
}

function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  displayCart();
}

function changeQuantity(index, change) {
  let cart = getCart();
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart(cart);
  displayCart();
}

function checkout() {
  alert('Đã thanh toán');
  // Add your checkout logic here
}

document.addEventListener('DOMContentLoaded', displayCart);