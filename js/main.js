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
});
