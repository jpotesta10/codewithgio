document.getElementById('app-request-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    // Simulate sending data to a server
    try {
        await sendFormData({name, email, description});
        document.getElementById('success-message').hidden = false;
        setTimeout(() => {
            document.getElementById('success-message').hidden = true;
        }, 5000); // Hide success message after 5 seconds
    } catch (error) {
        console.error('Submission failed:', error);
    }

    // Clear the form
    document.getElementById('app-request-form').reset();
});

async function sendFormData(data) {
    // Placeholder for sending data to a server
    console.log('Sending form data:', data);
    // Simulate a network request
    return new Promise(resolve => setTimeout(resolve, 1000));
}
