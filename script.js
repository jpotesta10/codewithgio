document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        description: document.getElementById('description').value
    };

    try {
        // Simulate an async API call
        await fetch('https://example.com/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Show success message
        document.getElementById('successMessage').style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
    }
});
document.getElementById('testPageButton').addEventListener('click', () => {
    window.open('testPage.html', '_blank');
});
