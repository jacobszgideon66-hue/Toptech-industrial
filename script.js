function showPage(pageId) {
    // Hide all pages first
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the targeted page
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
    } else {
        // Fallback to home if ID is missing
        document.getElementById('home').classList.add('active');
    }

    // Scroll to top for smooth transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initial check to ensure home is visible
window.onload = function() {
    console.log("Website loaded and ready.");
};
