window.addEventListener("scroll", function() {
    let loginSection = document.getElementById("loginSection");
    let scrollPosition = window.scrollY;

    // When user scrolls past 150px, show login form
    if (scrollPosition > 150) {
        loginSection.classList.add("show");
    }
});