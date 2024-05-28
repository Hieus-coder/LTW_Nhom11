document.addEventListener('DOMContentLoaded', () => {
    const signupLink = document.getElementById("signup-link");
    const loginLink = document.getElementById("login-link");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    signupLink.addEventListener("click", () => {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    loginLink.addEventListener("click", () => {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    document.getElementById("send-1").addEventListener("click", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const error = document.getElementById("loginError");

        if (email.trim() === "") {
            error.innerText = "Vui lòng nhập email!.";
        } else if (!validateEmail(email)) {
            error.innerText = "Email nhập không hợp lệ!";
        } else if (password.trim() === "") {
            error.innerText = "Vui lòng nhập mật khẩu!.";
        } else if (password.length < 6) {
            error.innerText = "Mật khẩu phải trên 6 kí tự.";
        } else {
            const savedEmail = localStorage.getItem('email');
            const savedPassword = localStorage.getItem('password');

            if (email === savedEmail && password === savedPassword) {
                alert("Đăng nhập thành công!");
                window.location.href = "Home.html";
            } else {
                error.innerText = 'Email hoặc mật khẩu không đúng!';
            }
        }
    });

    document.getElementById("send-2").addEventListener("click", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email1 = document.getElementById("email1").value;
        const password1 = document.getElementById("password1").value;
        const repassword = document.getElementById("repassword").value;
        const error = document.getElementById("RegisterError");

        if (username.trim() === "") {
            error.innerText = "Vui lòng nhập tên người dùng!";
        } else if (username.length < 3) {
            error.innerText = "Tên người dùng phải có ít nhất 3 kí tự";
        } else if (email1.trim() === "") {
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
            localStorage.setItem('username', username);
            localStorage.setItem('email', email1);
            localStorage.setItem('password', password1);
            alert("Tạo tài khoản thành công!");
            registerForm.style.display = "none";
            loginForm.style.display = "block";
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
