document.addEventListener("DOMContentLoaded", () => {

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
            errorMessage.innerHTML= "";
            errorMessage.hidden = true;
            let errors = [];
            
            // checks if email field is empty
            if (!email){
            errors.push("- Email is required.");
            }
            
            else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)){
                errors.push("- Please enter a valid email address (ex: jsmith123@email.com).");
                }
            }
            
            // checks if password field is empty
            if (!password) {
                errors.push("- Password is required.");
            }
            
            if (errors.length > 0){
                errorMessage.innerHTML = errors.join("<br>"); // displays all errors
                errorMessage.hidden = false;
                return; // stops execution if invalid data
            }
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
            
            // clear previous errors
            errorMessage.innerHTML= "";
            errorMessage.hidden = true;
            let errors = [];
            
            // checks if first name field is empty
            if (!firstName) {
                errors.push("- First name is required.");
            }

            // checks if last name field is empty
            if (!lastName) {
                errors.push("- Last name is required.");
            }
            
            // checks if email field is empty
            if (!email){
            errors.push("- Email is required.");
            }
            
            else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)){
                errors.push("- Please enter a valid email address (ex: jsmith123@email.com).");
                }
            }
            
            // checks if password field is empty
            if (!password) {
                errors.push("- Password is required.");
            }

            else {
                // password must contain at least 8 characters, one lower and upper case letter, one number and one special character
                const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])\S{8,}$/;
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
                errorMessage.innerHTML = errors.join("<br>"); // displays all errors
                errorMessage.hidden = false;
                return; // stops execution if invalid data
            }
        });
    }



});