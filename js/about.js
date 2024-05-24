document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các phần tử có class "question"
    var questions = document.querySelectorAll(".question");

    // Lặp qua từng phần tử và thêm sự kiện click
    questions.forEach(function(question) {
        question.addEventListener("click", function() {
            // Toggle class "active" để hiển thị hoặc ẩn câu trả lời tương ứng
            this.nextElementSibling.classList.toggle("active");
        });
    });
});
const slides = document.querySelectorAll('.People-1');
    let currentSlide = 0;
    const totalSlides = slides.length;
    const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            slides[currentSlide].style.display = 'none';
            currentSlide++;
            slides[currentSlide].style.display = 'block';
        } else {
            slides[currentSlide].style.display = 'none';
            currentSlide = 0;
            slides[currentSlide].style.display = 'block';
        }
    }