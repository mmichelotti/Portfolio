// Fade-in effect for content on page load
window.onload = function () {
    // Select all sections with the 'fade-in' class
    const fadeIns = document.querySelectorAll('.fade-in');
    
    // Add 'visible' class to each section after a short delay
    fadeIns.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, index * 300); // Delay each section to appear gradually
    });
};
