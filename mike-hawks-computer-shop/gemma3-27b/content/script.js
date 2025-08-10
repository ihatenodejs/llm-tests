document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Basic validation (you'd want to improve this)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Message sent!  I'll get back to you soon."); // Replace with actual email sending logic
        document.getElementById('contact-form').reset();
    } else {
        alert("Please fill in all fields.");
    }
});
