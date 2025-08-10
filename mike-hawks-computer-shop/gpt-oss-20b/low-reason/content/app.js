document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual submission for demo

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate successful send
  alert(`Thank you, ${name}! Your message has been sent.`);
  this.reset();
});
