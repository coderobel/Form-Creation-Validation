document.addEventListener("DOMContentLoaded", function (){
    form = document.getElementById("registration-form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const username = document.getElementById("username").value.trim();
        let isValild = true;
        const messages = [];
        if(username.length < 3){
            isValid = false;
            messages.push("Username length must be greater than three.");
        }
        if(!('@'in email && '.' in email)){
            isValid = false;
            messages.push("Email must include @ and .");
        }
        if(password.length < 8){
            isValid = false;
            messages.push("Password must be at least 8 characters");
        }
        feedbackDiv = document.getElementById("form-feedback");
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";}
        else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";}
    })})

