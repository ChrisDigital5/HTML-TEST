document.addEventListener('DOMContentLoaded', () => {
    // Initialize header
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        headerContainer.innerHTML = '<site-header></site-header>';
    }

    // Initialize footer
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        footerContainer.innerHTML = '<site-footer></site-footer>';
    }

    // Course start buttons functionality
    const courseStartButtons = document.querySelectorAll('#start-fundamentals-course, #start-advanced-course, #start-projects-course');
    courseStartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const courseTitle = document.querySelector('h1').textContent;
            
            Swal.fire({
                title: `Welcome to ${courseTitle}!`,
                text: 'This course is currently being prepared. Sign up for early access and updates!',
                icon: 'info',
                input: 'email',
                inputPlaceholder: 'Enter your email',
                inputValidator: (value) => {
                    if (!value) {
                        return 'You need to write something!';
                    }
                },
                confirmButtonText: 'Get Notified',
                showCancelButton: true
            }).then((result) => {
                if (result.isConfirmed && result.value) {
                    Swal.fire({
                        title: 'Thank You!',
                        text: 'We will notify you about the course soon.',
                        icon: 'success'
                    });
                }
            });
        });
    });
});

// Load Sweet Alert library dynamically
const sweetAlertScript = document.createElement('script');
sweetAlertScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
document.head.appendChild(sweetAlertScript);
