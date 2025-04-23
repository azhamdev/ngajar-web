const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const errorMsg = document.getElementById('error-msg');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        errorMsg.textContent = 'Please fill in both fields';
        return;
    }

    // Here you would typically make an AJAX request to your server to authenticate the user
    // For this example, we'll just pretend the user is authenticated
    const authenticated = true;

    if (authenticated) {
        window.location.href = 'dashboard.html'; // Redirect to dashboard page
    } else {
        errorMsg.textContent = 'Invalid username or password';
    }
});