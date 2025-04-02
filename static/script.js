function signUp() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById("signup-confirm-password").value;

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
        password: password,
        progress: {}
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
        document.getElementById("login-message").innerText = "User not found!";
    }
}

function logOut() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}

function checkLogin() {
    var loggedInUser = sessionStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        window.location.href = "login.html";
    } else {
        document.getElementById("dashboard-user").innerText = loggedInUser;
        loadUserProgress(loggedInUser);
    }
}

function updateProgress() {
    var loggedInUser = sessionStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        return;
    }

    var skill = document.getElementById("skill").value;
    var progress = document.getElementById("progress").value;

    var userData = JSON.parse(localStorage.getItem(loggedInUser));
    userData.progress[skill] = progress;

    localStorage.setItem(loggedInUser, JSON.stringify(userData));

    document.getElementById("progress-message").innerText = "Progress updated!";
    loadUserProgress(loggedInUser);
}

function loadUserProgress(email) {
    var userData = JSON.parse(localStorage.getItem(email));
    var progressContainer = document.getElementById("user-progress");

    if (progressContainer) {
        progressContainer.innerHTML = "";
        for (var skill in userData.progress) {
            var progressItem = document.createElement("li");
            progressItem.innerText = `${skill}: ${userData.progress[skill]}%`;
            progressContainer.appendChild(progressItem);
        }
    }
}