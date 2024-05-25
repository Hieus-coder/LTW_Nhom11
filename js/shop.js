document.addEventListener("DOMContentLoaded", function () {
    var line = document.querySelector('.line');
    var priceDisplay = document.querySelector('.price-display');

    var leftValue = 10;
    var rightValue = 160;

    var price = "$" + leftValue + " - $" + rightValue;
    priceDisplay.innerText = price;

    var draggables = document.querySelectorAll('.draggable');
    var isDragging = false;

    draggables.forEach(function (draggable) {
        draggable.addEventListener('mousedown', function (event) {
            isDragging = true;
            var startX = event.clientX - draggable.offsetLeft;

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            function onMouseMove(event) {
                if (!isDragging) return;
                if (event.buttons !== 1) return;

                var newX = event.clientX - startX;
                var lineRect = line.getBoundingClientRect();
                var lineLeft = lineRect.left + window.scrollX;
                var lineRight = lineRect.right + window.scrollX - draggable.offsetWidth;
                newX = Math.min(Math.max(lineLeft, newX), lineRight);
                draggable.style.left = newX - lineLeft + 'px';

                var value = Math.round((newX - lineLeft) / line.offsetWidth * 150) + 10;

                if (draggable.classList.contains('draggable-left')) {
                    leftValue = value;
                } else if (draggable.classList.contains('draggable-right')) {
                    rightValue = value;
                }

                var price = "$" + leftValue + " - $" + rightValue;
                priceDisplay.innerText = price;
            }

            function onMouseUp() {
                isDragging = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }
        });
    });
});
    