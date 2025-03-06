function showSignUp() {
    document.getElementById("loginSection").classList.add("hidden");  // Hide Login form
    document.getElementById("signupSection").classList.remove("hidden");  // Show Sign Up form
}

// Function to show the Login form and hide the Sign Up form
function showLogin() {
    document.getElementById("signupSection").classList.add("hidden");  // Hide Sign Up form
    document.getElementById("loginSection").classList.remove("hidden");  // Show Login form
}

// Add event listener for clicking outside of the login/signup sections to hide them
window.addEventListener("click", function(e) {
    let loginSection = document.getElementById("loginSection");
    let signupSection = document.getElementById("signupSection");
    if (!loginSection.contains(e.target) && !signupSection.contains(e.target)) {
        loginSection.classList.add("hidden");
        signupSection.classList.add("hidden");
    }
});

// Show login section when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginSection").classList.remove("hidden");
});