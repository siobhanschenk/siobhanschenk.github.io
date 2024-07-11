document.addEventListener("DOMContentLoaded", function () {
    // Initially show the first tab
    showTab('tab-about');

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const tabName = this.getAttribute('href').substring(1); // Get tab ID from href
            showTab(tabName);
            window.location.hash = tabName; // Update URL hash
        });
    });
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}
