// Check if the user has access
if (!localStorage.getItem('access')) {
    // If not, redirect to the password page
    window.location.href = 'password.html';
} else {
    // If they have access, you can proceed with the main page content
    console.log('Access granted. Welcome to the main page!');
    // Add your main page logic here
}
