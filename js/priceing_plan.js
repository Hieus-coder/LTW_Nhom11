function toggleButton(button) {
  if (!button.classList.contains('active')) {
    var buttons = button.parentNode.querySelectorAll('button');
    buttons.forEach(function (btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  }
}