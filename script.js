document.addEventListener("click", function () {
    let heroText = document.querySelector(".hero-text");
    let loginSection = document.getElementById("loginSection");

    // Fade out the hero text
    heroText.classList.add("fade-out");

    // After a delay, show the login section and slide it up
    setTimeout(() => {
        loginSection.classList.add("show");
    }, 500); // Delay to ensure the hero text fades out first
});