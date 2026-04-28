function showPage(pageId) {
    // 1. Find all sections with the class 'page'
    const pages = document.querySelectorAll('.page');
    
    // 2. Remove the 'active' class from all of them
    pages.forEach(p => {
        p.classList.remove('active');
    });

    // 3. Find the specific page the user clicked on
    const target = document.getElementById(pageId);
    
    // 4. If it exists, add the 'active' class to show it
    if (target) {
        target.classList.add('active');
    }
    
    // 5. Scroll to the top of the page (important for mobile)
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Optional: Log to console to verify the script loaded
console.log("Toptech Industrial Script Loaded Successfully");
