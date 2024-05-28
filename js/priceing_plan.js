function toggleButton(button) {
  if (!button.classList.contains('active')) {
      var buttons = button.parentNode.querySelectorAll('button');
      buttons.forEach(function (btn) {
          btn.classList.remove('active');
      });
      button.classList.add('active');
      updatePrice();
  }
}

function updatePrice() {
  const button1 = document.querySelector('#container1 .active').id;
  const button2 = document.querySelector('#container2 .active').id;

  let priceAfter, priceFirst;

  if (button1 === 'button1_1' && button2 === 'button2_1') {
      priceAfter = '$50';
      priceFirst = '$70';
  } else if (button1 === 'button1_1' && button2 === 'button2_2') {
      priceAfter = '$60';
      priceFirst = '$80';
  } else if (button1 === 'button1_2' && button2 === 'button2_1') {
      priceAfter = '$68';
      priceFirst = '$88';
  } else if (button1 === 'button1_2' && button2 === 'button2_2') {
      priceAfter = '$78';
      priceFirst = '$98';
  }

  document.getElementById('price_after').textContent = priceAfter;
  document.getElementById('price_first').textContent = priceFirst;
}

function showNotification() {
  alert("Bạn đã đăng ký thành công!");
}

// Initial price update
updatePrice();