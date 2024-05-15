const signupLink = document.getElementById("signup-link");
const loginLink = document.getElementById("login-link");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

signupLink.addEventListener("click", function () {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

loginLink.addEventListener("click", function () {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
});
document.getElementById("send-1").addEventListener("click", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var error = document.getElementById("loginError");

    if (email.trim() === "") {
        error.innerText = "Vui lòng nhập email!.";
    }
    else if (!validateEmail(email)) {
        error.innerText = "Email nhập không hợp lệ!";
    }
    else if (password.trim() === "") {
        error.innerText = "Vui lòng nhập mật khẩu!.";
    }
    else if (email.trim() == "" && password.trim() == "") {
        error.innerText = "Không được để trống!.";
    }
    else if (password.length < 6) {
        error.innerText = "Mật khẩu phải trên 6 kí tự.";
    }
    else {
        alert("Đăng nhập thành công!.");
        window.location.href = "Home.html";
    }
});
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
document.getElementById("send-2").addEventListener("click", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("password1").value;
    var repassword = document.getElementById("repassword").value;
    var error = document.getElementById("RegisterError");

    if (username.trim() === "") {
        error.innerText = "Vui lòng nhập tên người dùng!";
    } else if(username.length < 3){
        error.innerText = "Tên người dùng phải có ít nhất 3 kí tự";
    }else if (email1.trim() === "") {
        error.innerText = "Vui lòng nhập email!";
    } else if (!validateEmail(email1)) {
        error.innerText = "Email nhập không hợp lệ!";
    } else if (password1.trim() === "") {
        error.innerText = "Vui lòng nhập mật khẩu!";
    } else if (password1.length < 6) { 
        error.innerText = "Mật khẩu phải có ít nhất 6 kí tự!";
    } else if (repassword.trim() === "") {
        error.innerText = "Vui lòng nhập lại mật khẩu!";
    } else if (password1.trim() !== repassword.trim()) {
        error.innerText = "Mật khẩu không trùng nhau!";
    } else {
        alert("Tạo tài khoản thành công!");
        window.location.href = "Home.html";
    }
});

function validateEmail(email1) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email1);
}
