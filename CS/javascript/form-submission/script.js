// script.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");

    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

       if (name && email && message) {
            alert(`Form submitted successfully!\nName: ${name}\n Email: ${email}\n Message: ${message}`);
       } else {
            alert('Please correctily fill everything');
       }
    });
});
