// Add event listener for clicking outside of the login section to hide it
window.addEventListener("click", function(e) {
    let loginSection = document.getElementById("loginSection");
    if (!loginSection.contains(e.target)) {
        loginSection.style.display = 'none'; // Hides the login section
    }
});

// Ensure login section is visible when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginSection").style.display = 'flex'; // Show the login section
});