// Email and password validation function
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex for email validation
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 8; // Password should be at least 8 characters
}

// Handle Signup Form Submission
document.querySelector('#signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.querySelector('#firstname').value.trim();
    const surName = document.querySelector('#surname').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const dob = document.querySelector('#dob').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    if (firstName === '' || surName === '') {
        alert('First name and last name are required.');
        return;
    }

    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    
    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    
    if (dob === '') {
        alert('Please select your date of birth.');
        return;
    }

    
    if (!gender) {
        alert('Please select your gender.');
        return;
    }

    alert(`Signup successful! Welcome, ${firstName}!`);
    
});
