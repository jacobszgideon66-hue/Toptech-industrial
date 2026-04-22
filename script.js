function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
    }
    
    // Crucial for mobile users so they don't stay scrolled down
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
