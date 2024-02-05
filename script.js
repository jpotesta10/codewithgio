document.getElementById('aiRequestForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    // Perform any AJAX/form submission here if needed

    // Show the success message
    document.getElementById('successMessage').style.display = 'block';

    // Optionally, clear the form fields
    this.reset();

    // Hide the message after
