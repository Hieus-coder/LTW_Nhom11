document.addEventListener("DOMContentLoaded", function () {
    var choose1 = document.getElementById("question-1");
    var reply1 = document.getElementById("reply-1");
    var choose2 = document.getElementById("question-2");
    var reply2 = document.getElementById("reply-2");
    var choose3 = document.getElementById("question-3");
    var reply3 = document.getElementById("reply-3");
    var choose4 = document.getElementById("question-4");
    var reply4 = document.getElementById("reply-4");

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

    function toggleReply(reply) {
        if (reply.style.display === "none") {
            reply.style.display = "block";
        }
        else {
            reply.style.display = "none";
        }
    }
});


const slideContainer = document.getElementById('slide-container');
        const slides = slideContainer.children;
        let currentIndex = 0;

        function showNextSlide() {
            currentIndex++;
            slideContainer.style.transition = 'transform 0.5s ease';
            slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

            if (currentIndex === slides.length - 1) {
                setTimeout(() => {
                    slideContainer.style.transition = 'none';
                    slideContainer.style.transform = 'translateX(0)';
                    currentIndex = 0;
                }, 500); // 500ms là thời gian của transition
            }
        }

        setInterval(showNextSlide, 3000); // Thay đổi slide mỗi 3 giây
