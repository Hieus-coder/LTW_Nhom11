document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var error = document.getElementById("Error");


    if (email.trim() === "") {
        error.innerText ="Vui lòng nhập email!.";
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
    else{
        alert("Đăng nhập thành công!.");
        window.location.href = "Home.html";
    }
});
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}