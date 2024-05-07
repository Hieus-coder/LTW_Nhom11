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