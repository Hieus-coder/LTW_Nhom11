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
    const slideInterval = setInterval(nextSlide, 3000);

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
    document.addEventListener('DOMContentLoaded', () => {
        const userHeader = document.getElementById('userHeader');
        const username = localStorage.getItem('username');
        const loggedIn = username !== null;
    
        if (loggedIn) {
            userHeader.innerHTML = `
                <div class="user_info">
                    <span>Welcome, ${username}</span>
                    <a href="#" id="logout">Logout</a>
                </div>
            `;
    
            document.getElementById('logout').addEventListener('click', (event) => {
                event.preventDefault();
                localStorage.removeItem('username');
                localStorage.removeItem('email');
                localStorage.removeItem('password');
                alert('Logged out successfully!');
                window.location.reload();
            });
        } else {
            userHeader.innerHTML = `
                <div class="user_info">
                    <a href="login.html">Login</a>
                </div>
            `;
        }
    });
    