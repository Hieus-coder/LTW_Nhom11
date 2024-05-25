
var totalAmount = 27;
var quantity = 1;

var decrementButton = document.getElementById('decrementButton');
var incrementButton = document.getElementById('incrementButton');
var quantityDisplay = document.getElementById('quantityDisplay');
var totalAmountDisplay = document.getElementById('totalAmountDisplay');
var clearSelectionButton = document.querySelector('.clear_choose');
var addToCartButton = document.querySelector('.end');
var deliveryInput = document.getElementById('delivery');

incrementButton.addEventListener('click', function () {
    quantity++;
    quantityDisplay.textContent = quantity;

    totalAmount += 27;
    totalAmountDisplay.textContent = '$' + totalAmount;
});

decrementButton.addEventListener('click', function () {
    if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;


        totalAmountDisplay.textContent = '$' + totalAmount;
    }
});

clearSelectionButton.addEventListener('click', function () {
    var checkboxes = document.querySelectorAll('input[type="radio"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
    deliveryInput.value = '';
});

addToCartButton.addEventListener('click', function () {
    if (deliveryInput.value.trim() === '') {
        alert('Please enter delivery information.');
    } else {
        alert('Your order has been received!');
    }
});
