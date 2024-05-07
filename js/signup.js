document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;

    var error = document.getElementById("Error");


    if (email.trim() === "") {
        error.innerText = "Vui lòng nhập email!";
    } else if (!validateEmail(email)) {
        error.innerText = "Email nhập không hợp lệ!";
    } else if (password.trim() === "") {
        error.innerText = "Vui lòng nhập mật khẩu!";
    } else if (repassword.trim() === "") {
        error.innerText = "Vui lòng nhập lại mật khẩu!";
    } else if (password.trim() !== repassword.trim()) {
        error.innerText = "Mật khẩu không trùng nhau!";
    } else {
        alert("Tạo tài khoản thành công!");
        window.location.href = "login.html";
    }
});
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Kiểm tra nếu đường dẫn của trang hiện tại chứa "login.html", thêm lớp active vào liên kết "Login"
if (window.location.href.indexOf("login.html") > -1) {
    document.getElementById("loginLink").classList.add("active");
}

// Kiểm tra nếu đường dẫn của trang hiện tại chứa "signup.html", thêm lớp active vào liên kết "SignUp"
if (window.location.href.indexOf("signup.html") > -1) {
    document.getElementById("signupLink").classList.add("active");
}
