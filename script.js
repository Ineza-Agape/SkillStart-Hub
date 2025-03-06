document.addEventListener("click", function () {
    let loginSection = document.getElementById("loginSection");

    // Make the login section visible and slide it up to the center
    loginSection.style.opacity = 1; // Make the login section visible
    loginSection.style.top = "0";   // Slide it up to the top
});

window.addEventListener('scroll', function() {
    const content = document.querySelector('.home-content');
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});