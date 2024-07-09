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
            history.pushState({}, '', '#' + tabName); // Update URL hash without reloading
        });
    });

    // Set interval for automatic carousel slide
    setInterval(autoSlide, 5000);
});

let slideIndex = 0;
const carousel = document.querySelector('.carousel');

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

function moveCarousel(n) {
    slideIndex += n;
    showCarousel();
}

function showCarousel() {
    const carouselWidth = carousel.clientWidth;
    carousel.style.transform = `translateX(-${slideIndex * carouselWidth}px)`;
}

function autoSlide() {
    moveCarousel(1);
}

}
