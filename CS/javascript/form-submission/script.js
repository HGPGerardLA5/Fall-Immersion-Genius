// script.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    // Add an event listener for the form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

       if (name && email && message) {
            alert(`Form submitted successfully!\nName: ${name}\n Email: ${email}\n Message: ${message}`);
       } else {
        alert("Please correctily fill everything");
       }
    });
});
