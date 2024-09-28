// Select elements
let emailInput = document.getElementById('email_input');
let passwordInput = document.getElementById('password_input');
let emailError = document.getElementsByClassName('error_msg')[0];
let passwordError = document.getElementsByClassName('error_msg')[1];
let emailSuccess = document.getElementsByClassName('email_success')[0]; 
let passwordSuccess = document.getElementsByClassName('password_success')[0]; 
let button = document.getElementById("Submit_btn");
let successMsg = document.getElementsByClassName('success')[0];
let heading = document.querySelectorAll('h1')[0];

// Email validation on change
emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailValue.length > 3 && emailPattern.test(emailValue)) {
        emailError.innerText = "";
        emailSuccess.innerText = "Email looks good!";
        emailSuccess.style.color = "green";
    } else {
        emailError.innerText = "Make sure the email has more than 3 characters, contains @ and .";
        emailSuccess.innerText = "";
    }
    updateHeading();
});

// Password validation on change
passwordInput.addEventListener('input', () => {
    const passwordValue = passwordInput.value;

    // Perform various checks for password strength
    if (passwordValue.length <= 8) {
        passwordError.innerText = "Make sure the password is more than 8 characters.";
        passwordSuccess.innerText = "";
    } else if (passwordValue.search(/[a-z]/) === -1) {
        passwordError.innerText = "Password must contain at least one lowercase letter.";
        passwordSuccess.innerText = "";
    } else if (passwordValue.search(/[A-Z]/) === -1) {
        passwordError.innerText = "Password must contain at least one uppercase letter.";
        passwordSuccess.innerText = "";
    } else if (passwordValue.search(/[0-9]/) === -1) {
        passwordError.innerText = "Password must contain at least one number.";
        passwordSuccess.innerText = "";
    } else if (passwordValue.search(/[!@#$%^&*(),.?":{}|<>]/) === -1) {
        passwordError.innerText = "Password must contain at least one special character.";
        passwordSuccess.innerText = "";
    } else {
        passwordError.innerText = "";
        passwordSuccess.innerText = "Password looks good!";
        passwordSuccess.style.color = "green";
    }
    updateHeading();
});

// Function to update heading based on validation status
function updateHeading() {
    if (emailError.innerText === "" && passwordError.innerText === "") {
        heading.innerText = "If validations are correct!";
    } else {
        heading.innerText = ""; 
    }
}

// Submit button click event
button.addEventListener('click', (e) => {
    e.preventDefault(); 
    if (emailError.innerText === "" && passwordError.innerText === "") {
        let confirmation = confirm("Are you sure you want to sign up?");
        if (confirmation) {
            alert("Successful signup!");
            // Clear inputs
            emailInput.value = "";
            passwordInput.value = "";
            emailSuccess.innerText = "";
            passwordSuccess.innerText = "";
            successMsg.innerText = ""; 
            heading.innerText = ""; 
        } else {
            emailInput.value = "";
            passwordInput.value = "";
            emailSuccess.innerText = "";
            passwordSuccess.innerText = "";
            successMsg.innerText = "";
            heading.innerText = ""; 
        }
    } else {
        successMsg.innerText = ""; 
        heading.innerText = "";
    }
});
