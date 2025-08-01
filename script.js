document.addEventListener("DOMContentLoaded", function (){
    form = document.getElementById("registration-form")
    feedbackDiv = document.getElementById("form-feedback")
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const username = document.getElementById("username").value.trim();

    })})

