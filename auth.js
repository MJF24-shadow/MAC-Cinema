document.addEventListener("DOMContentLoaded", () => {

    // RegEx for email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // password must contain at least 8 characters, one lower and upper case letter, one number and one special character
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])\S{8,}$/;

    // DISPLAY SUCCESS/ERROR MESSAGE
    function displayMessages(element, messages, isSuccess = false) {
        element.innerHTML = Array.isArray(messages) ? messages.join("<br>") : messages;
        element.classList.toggle("success-banner", isSuccess);
        element.hidden = false;
    }


    // LOGIN ACCOUNT FORM VALIDATION
    const formLogin = document.getElementById("login-form");
    if (formLogin) {
        formLogin.addEventListener("submit", function(event){

            // prevents default browser form reload to handle validation
            event.preventDefault();

            // assigns variables to input values
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            
            const errorMessage = document.getElementById("error-message");
            
            // clear previous errors
            errorMessage.hidden = true;
            let errors = [];
            
            // Client-side validation
            // checks if email field is empty
            if (!email){
            errors.push("- Email is required.");
            }
            
            else {
                if (!emailRegex.test(email)){
                errors.push("- Please enter a valid email address (ex: jsmith123@email.com).");
                }
            }
            
            // checks if password field is empty
            if (!password) {
                errors.push("- Password is required.");
            }
            
            if (errors.length > 0){
                displayMessages(errorMessage, errors); // displays all errors
                return; // stops execution if invalid data
            }

            // TODO FOR FLASK

            window.location.href = "index.html";

        });
    }

    // REGISTER ACCOUNT FORM VALIDATION
    const formRegister = document.getElementById("register-form");
    if (formRegister) {
        formRegister.addEventListener("submit", function(event){

            // prevents default browser form reload to handle validation
            event.preventDefault();

            // assigns variables to input values
            const firstName = document.getElementById("first-name").value.trim();
            const lastName = document.getElementById("last-name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const passRepeat =  document.getElementById("psw-repeat").value.trim();
            
            const errorMessage = document.getElementById("error-message");
            
            errorMessage.hidden = true;
            let errors = [];
            
            // Client-side validation
            // checks if first name field is empty
            if (!firstName) {errors.push("- First name is required.");}

            // checks if last name field is empty
            if (!lastName) {errors.push("- Last name is required.");}
            
            // checks if email field is empty
            if (!email){errors.push("- Email is required.");}
            
            else {
                if (!emailRegex.test(email)){
                errors.push("- Please enter a valid email address (ex: jsmith123@email.com).");
                }
            }
            
            // checks if password field is empty
            if (!password) {errors.push("- Password is required.");}

            else {
                if (!passRegex.test(password)){
                errors.push("- Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number and one special character.");
                }
            }

            // checks if repeat password field is empty
            if (!passRepeat) {
                errors.push("- Please confirm your password.");
            }
            else {
                if(passRepeat !== password){
                    errors.push("- Passwords must match.")
                }
            }
            
            if (errors.length > 0){
                displayMessages(errorMessage, errors); // displays all errors
                return; // stops execution if invalid data
            }

            // TODO FOR FLASK

            window.location.href = "index.html";


        });
    }

    // PROFILE AND PASSWORD UPDATE FORM VALIDATION
    const formProfile = document.getElementById("profile-form");
    const formPassword = document.getElementById("password-form");


    if (formProfile || formPassword){
        const firstNameInput = document.getElementById("first-name");
        const lastNameInput = document.getElementById("last-name");
        const emailInput = document.getElementById("email");

        // Fetch current user info from Flask session on page load
        // TEMP: Pre-fill with placeholder user data until GET /api/account is connected
        firstNameInput.value = "John";
        lastNameInput.value = "Smith";
        emailInput.value = "jsmith123@email.com";

        // Handles Profile Update
        formProfile.addEventListener("submit", function (event) {
            event.preventDefault();
            const profileMsg = document.getElementById("profile-error-message");
            profileMsg.hidden = true;

            let errors = []

            const firstName = firstNameInput.value.trim();
            const lastName = lastNameInput.value.trim();
            const email = emailInput.value.trim().toLowerCase();

            if (!firstName) errors.push("- First name is required.");
            if (!lastName) errors.push("- Last name is required.");
            if (!email) {
                errors.push("- Email is required.");
            } else if (!emailRegex.test(email)) {
                errors.push("- Please enter a valid email address (ex: jsmith123@email.com).");
            }

            if (errors.length > 0) {
                displayMessages(profileMsg, errors);
                return;
            }

            // TODO: Replace with fetch("/api/account/profile", ...) once Flask backend is ready
            displayMessages(profileMsg, ["Profile updated successfully! (Temp frontend preview)"], true);
            
        });

        // Handle Password Update
        formPassword.addEventListener("submit", function (event) {
            event.preventDefault();
            const passMsg = document.getElementById("password-error-message");
            passMsg.hidden = true;

            let errors = [];

            const currentPassword = document.getElementById("current-password").value.trim();
            const newPassword = document.getElementById("new-password").value.trim();
            const passRepeat = document.getElementById("confirm-password").value.trim();
            
            if (!currentPassword) errors.push("- Current password is required.");

            if (!newPassword) {
                errors.push("- New password is required.");
            } else if (!passRegex.test(newPassword)) {
                errors.push("- New password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number and one special character.");
            }

            if (!passRepeat) {
                errors.push("- Please confirm your new password.");
            } else if (newPassword !== passRepeat) {
                errors.push("- New passwords must match.");
            }

            if (errors.length > 0) {
                displayMessages(passMsg, errors);
                return;
            }

            // TODO: Replace with fetch("/api/account/password", ...) once Flask backend is ready
            formPassword.reset();
            displayMessages(passMsg, ["Password updated successfully! (Temp frontend preview)"], true);

            
        });
    }
    

    // LOGOUT HANDLER
    const logoutLink = document.getElementById("logout-link");
    if (logoutLink) {
        logoutLink.addEventListener("click", function (event) {
            event.preventDefault();
            
            // TODO FOR FLASK
            window.location.href = "login.html";
        });
    }

});