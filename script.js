document.addEventListener('DOMContentLoaded', () => {
    // Example functionality for the enroll button
    const enrollButtons = document.querySelectorAll('.enroll-btn');
    enrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseTitle = button.previousElementSibling.previousElementSibling.innerText;
            alert(`You have enrolled in ${courseTitle}`);
        });
    });

    // Handle profile form submission
    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Profile updated for ${name}`);
    });
});
