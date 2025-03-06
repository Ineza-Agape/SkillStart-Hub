window.addEventListener("click", function() {
    let loginSection = document.getElementById("loginSection");
    let heroText = document.querySelector(".hero-text");

    // Hide hero text and show login section on click
    heroText.classList.add("fade-out");
    
    setTimeout(() => {
        loginSection.style.top = "0"; // Bring the login section into view
        loginSection.style.opacity = "1"; // Make the login section visible
    }, 500); // Delay to allow for fade-out effect
});