if (!localStorage.getItem('access')) {
    // If they don't have access, redirect to "./"
    window.location.href = './';
} else {
    console.log('Access granted. Welcome to the main page!');
}
