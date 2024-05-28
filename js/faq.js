document.addEventListener("DOMContentLoaded", function () {
    var choose1 = document.getElementById("question-1");
    var reply1 = document.getElementById("reply-1");
    var choose2 = document.getElementById("question-2");
    var reply2 = document.getElementById("reply-2");
    var choose3 = document.getElementById("question-3");
    var reply3 = document.getElementById("reply-3");
    var choose4 = document.getElementById("question-4");
    var reply4 = document.getElementById("reply-4");
    var choose5 = document.getElementById("question-5");
    var reply5 = document.getElementById("reply-5");
    var choose6 = document.getElementById("question-6");
    var reply6 = document.getElementById("reply-6");
    var choose7 = document.getElementById("question-7");
    var reply7 = document.getElementById("reply-7");
    var choose8 = document.getElementById("question-8");
    var reply8 = document.getElementById("reply-8");
    var choose9 = document.getElementById("question-9");
    var reply9 = document.getElementById("reply-9");


choose1.addEventListener("click", function () {
    toggleReply(reply1);
});
choose2.addEventListener("click", function () {
    toggleReply(reply2);
});
choose3.addEventListener("click", function () {
    toggleReply(reply3);
});
choose4.addEventListener("click", function () {
    toggleReply(reply4);
});
choose5.addEventListener("click", function () {
    toggleReply(reply5);
});
choose6.addEventListener("click", function () {
    toggleReply(reply6);
});
choose7.addEventListener("click", function () {
    toggleReply(reply7);
});
choose8.addEventListener("click", function () {
    toggleReply(reply8);
});
choose9.addEventListener("click", function () {
    toggleReply(reply9);
});
    function toggleReply(reply) {
        if (reply.style.display === "none") {
            reply.style.display = "block";
        }
        else {
            reply.style.display = "none";
        }
    }
});
function showDropdown() {
    var dropdownContent = document.getElementById("shopDropdownContent");
    dropdownContent.style.display = "block";
}

function hideDropdown() {
    var dropdownContent = document.getElementById("shopDropdownContent");
    dropdownContent.style.display = "none";
}

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
    