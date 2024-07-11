document.addEventListener("DOMContentLoaded", function () {
    // Initially show the About Me tab
    showTab('tab-about');

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const tabName = this.getAttribute('onclick').replace("showTab('", "").replace("')", "");
            showTab(tabName);
            window.location.hash = tabName; // Update URL hash
        });
    });
});

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}
