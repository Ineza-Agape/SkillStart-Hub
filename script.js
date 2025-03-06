document.addEventListener("click", function () {
    let heroText = document.querySelector(".hero-text");
    let loginSection = document.getElementById("loginSection");

    heroText.classList.add("fade-out");

    setTimeout(() => {
        loginSection.classList.add("show");
    }, 500);
});