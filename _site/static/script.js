document.addEventListener("click", function () {
    let loginSection = document.getElementById("loginSection");

    loginSection.style.opacity = 1;
    loginSection.style.top = "0";
});

window.addEventListener('scroll', function() {
    const content = document.querySelector('.home-content');
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});