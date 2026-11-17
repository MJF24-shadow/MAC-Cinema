document.addEventListener("DOMContentLoaded", () => {
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
            errorMessage.hidden = true
            let errors = [];
            
            // checks if email field is empty
            if (!email){
            errors.push("Email is required.");
            }
            
            else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)){
                errors.push("Please enter a valid email address (ex: jsmith123@email.com).");
                }
            }
            
            // checks if passord field is empty
            if (!password) {
                errors.push("Password is required.");
            }
            
            if (errors.length > 0){
                errorMessage.innerHTML = errors.join("<br>"); // displays all errors
                errorMessage.hidden = false;
                return; // stops execution if invalid data
            }
        });
    }

   


});