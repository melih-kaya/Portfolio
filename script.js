// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form values
    if (!name) {
        alert('Please enter your name.');
        event.preventDefault();
        return false;
    }

    if (!email) {
        alert('Please enter your email.');
        event.preventDefault();
        return false;
    }

    if (!message) {
        alert('Please enter your message.');
        event.preventDefault();
        return false;
    }

    // Basic email pattern check
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return false;
    }

    // If all validations pass, allow form submission
    return true;
});
