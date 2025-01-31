document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Message sent successfully!';
    
    // Clear form
    this.reset();
    
    // Add message to form
    this.appendChild(successMessage);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});
