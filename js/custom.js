
// JavaScript để tăng/giảm số lượng và tính tổng tiền
var totalAmount = 27; // Khởi tạo tổng tiền phải trả
var quantity = 1; // Khởi tạo số lượng

// Lấy các phần tử theo id
var decrementButton = document.getElementById('decrementButton');
var incrementButton = document.getElementById('incrementButton');
var quantityDisplay = document.getElementById('quantityDisplay');
var totalAmountDisplay = document.getElementById('totalAmountDisplay');
var clearSelectionButton = document.querySelector('.clear_choose');
var addToCartButton = document.querySelector('.end');
var deliveryInput = document.getElementById('delivery');

// Thêm sự kiện click cho nút +
incrementButton.addEventListener('click', function () {
    // Tăng số lượng và hiển thị
    quantity++;
    quantityDisplay.textContent = quantity;

    // Tăng tổng tiền và hiển thị
    totalAmount += 27; // Giả sử giá tiền tăng 1 đồng mỗi lần
    totalAmountDisplay.textContent = '$' + totalAmount;
});

// Thêm sự kiện click cho nút -
decrementButton.addEventListener('click', function () {
    if (quantity > 0) {
        // Giảm số lượng và hiển thị
        quantity--;
        quantityDisplay.textContent = quantity;

        // Giảm tổng tiền và hiển thị
        totalAmount -= 27; // Giả sử giá tiền giảm 1 đồng mỗi lần
        totalAmountDisplay.textContent = '$' + totalAmount;
    }
});

// Thêm sự kiện click cho nút "Clear Selection"
clearSelectionButton.addEventListener('click', function () {
    // Xóa chọn tất cả các radio button
    var checkboxes = document.querySelectorAll('input[type="radio"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
    // Xóa giá trị trong input delivery
    deliveryInput.value = '';
});

// Thêm sự kiện click cho nút "Add to Cart"
addToCartButton.addEventListener('click', function () {
    // Kiểm tra xem đã nhập thông tin delivery hay chưa
    if (deliveryInput.value.trim() === '') {
        alert('Please enter delivery information.');
    } else {
        // Hiển thị thông báo đã nhận đơn hàng
        alert('Your order has been received!');
    }
});
