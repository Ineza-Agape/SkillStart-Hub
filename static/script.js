function signUp() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById("signup-confirm-password").value;

    if (email === "ineza.agape1@gmail.com") {
        document.getElementById("signup-message").innerText = "This email is already registered!";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("signup-message").innerText = "Passwords do not match!";
        return;
    }

    if (localStorage.getItem(email)) {
        document.getElementById("signup-message").innerText = "User already exists!";
        return;
    }

    var user = {
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(user));
    document.getElementById("signup-message").innerText = "Account created successfully!";
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
}

function logIn() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    if (email === "ineza.agape1@gmail.com" && password === "kigali123") {
        sessionStorage.setItem("loggedInUser", email);
        window.location.href = "dashboard.html";
        return;
    }

    var userData = localStorage.getItem(email);

    if (userData) {
        var storedData = JSON.parse(userData);
        if (storedData.password === password) {
            sessionStorage.setItem("loggedInUser", email);
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("login-message").innerText = "Incorrect password!";
        }
    } else {
        document.getElementById("login-message").innerText = "User not found! Please sign up.";
    }
}

function logOut() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

function checkLogin() {
    var loggedInUser = sessionStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        window.location.href = "login.html";
    } else {
        document.getElementById("dashboard-user").innerText = loggedInUser;
    }
}