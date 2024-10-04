        document.getElementById('redirectButton').addEventListener('click', function() {
            // Create a new blank page
            const newWindow = window.open('about:blank');
            
            // Create an iframe element
            const iframe = newWindow.document.createElement('iframe');
            iframe.src = window.location.href; // Use the current URL
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';

            // Append the iframe to the new window's document
            newWindow.document.body.appendChild(iframe);
        });
