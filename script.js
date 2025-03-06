document.getElementById('signup-link').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default action of the link
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('signup-section').classList.remove('hidden');
});

document.getElementById('login-link').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default action of the link
    document.getElementById('signup-section').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
});