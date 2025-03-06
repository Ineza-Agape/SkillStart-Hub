window.addEventListener("scroll", function() {
    let loginSection = document.getElementById("loginSection");
    let scrollPosition = window.scrollY;

    if (scrollPosition > 150) {
        loginSection.classList.add("show");
    }
});
document.addEventListener("click", function () {
    let heroText = document.querySelector(".hero-text");
    let loginBox = document.querySelector(".login-box");

    heroText.classList.add("fade-out");

    setTimeout(() => {
        loginSection.classList.add("show");
    }, 500);
});